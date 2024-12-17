import React from "react";
import classes from "./DropDownItemList.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { changeFieldData } from "../../../redux/projectsSlise";

export default function DropDownItemList({ status, idProject, setActiveDrop }) {
  const dispatch = useDispatch();

  const hancdleClick = (e) => {
    dispatch(changeFieldData([idProject, { status }]));

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
