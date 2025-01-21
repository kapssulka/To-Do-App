import React from "react";
import classes from "./DropDownItemList.module.scss";
import cn from "classnames";

import { usePatchDataMutation } from "../../../redux/projectsAPI";

export default function DropDownItemList({ status, idProject, setActiveDrop }) {
  const [changeData, {}] = usePatchDataMutation();

  const hancdleClick = (e) => {
    changeData([idProject, { status }]).unwrap();

    setActiveDrop((prev) => !prev);
  };
  return (
    <div
      onClick={hancdleClick}
      className={cn(classes.item, {
        [classes.item_total]: status === "total",
        [classes.item_progress]: status === "progress",
        [classes.item_waiting]: status === "waiting",
        [classes.item_complited]: status === "complited",
      })}
    >
      {status}
    </div>
  );
}
