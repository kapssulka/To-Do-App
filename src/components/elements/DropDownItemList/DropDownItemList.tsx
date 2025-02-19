import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./DropDownItemList.module.scss";
import cn from "classnames";

import { usePatchDataMutation } from "../../../redux/projectsApi";
import { IdProject, IStatus, Tasks } from "../../../types/data";
import * as React from "react";
import {
  isStatusSelectable,
  updateAllTasksStatus,
} from "../../../helpers/workWithStatus";

interface IProps {
  status: IStatus;
  idProject: IdProject;
  setActiveDrop: Dispatch<SetStateAction<boolean>>;
  allTasks: Tasks;
}

export default function DropDownItemList({
  status,
  idProject,
  setActiveDrop,
  allTasks,
}: IProps) {
  const [shouldUpdateTasks, setShouldUpdateTasks] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [changeData, {}] = usePatchDataMutation();

  const hancdleClick = async (e: React.MouseEvent<HTMLElement>) => {
    await changeData([idProject, { status }]).unwrap();
    setShouldUpdateTasks(true);
    setActiveDrop((prev) => !prev);
  };

  useEffect(() => {
    if (shouldUpdateTasks && allTasks?.length > 0) {
      const tasksWithChangedStatus = updateAllTasksStatus(allTasks, status);

      changeData([idProject, { tasks: tasksWithChangedStatus }])
        .unwrap()
        .finally(() => setShouldUpdateTasks(false)); // Сбрасываем флаг
    }

    if (allTasks?.length > 0)
      setIsDisabled(isStatusSelectable(allTasks, status));
  }, [shouldUpdateTasks, allTasks, status]);

  return (
    <>
      {!isDisabled && (
        <button
          onClick={hancdleClick}
          className={cn(classes.item, {
            [classes.item_total]: status === "total",
            [classes.item_progress]: status === "progress",
            [classes.item_waiting]: status === "waiting",
            [classes.item_complited]: status === "completed",
          })}
        >
          {status}
        </button>
      )}
    </>
  );
}
