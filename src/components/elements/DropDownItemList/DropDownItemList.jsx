import React, { useEffect, useState } from "react";
import classes from "./DropDownItemList.module.scss";
import cn from "classnames";

import { usePatchDataMutation } from "../../../redux/projectsAPI";

export default function DropDownItemList({
  status,
  idProject,
  setActiveDrop,
  allTasks,
}) {
  const [shouldUpdateTasks, setShouldUpdateTasks] = useState(false);

  const [changeData, {}] = usePatchDataMutation();

  const hancdleClick = async (e) => {
    await changeData([idProject, { status }]).unwrap();
    setShouldUpdateTasks(true);
    setActiveDrop((prev) => !prev);
  };

  useEffect(() => {
    if (shouldUpdateTasks && allTasks?.length > 0) {
      const modifyTasks = allTasks.map((item) => ({
        ...item,
        completed: true,
      }));

      if (status === "completed") {
        changeData([idProject, { tasks: modifyTasks }])
          .unwrap()
          .finally(() => setShouldUpdateTasks(false)); // Сбрасываем флаг
      }
    }
  }, [shouldUpdateTasks, allTasks, status]);
  return (
    <div
      onClick={hancdleClick}
      className={cn(classes.item, {
        [classes.item_total]: status === "total",
        [classes.item_progress]: status === "progress",
        [classes.item_waiting]: status === "waiting",
        [classes.item_complited]: status === "completed",
      })}
    >
      {status}
    </div>
  );
}
