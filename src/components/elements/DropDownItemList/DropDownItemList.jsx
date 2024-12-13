import React from "react";
import classes from "./DropDownItemList.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { changeStatusData } from "../../../redux/projectsSlise";

export default function DropDownItemList({ status, id, setActiveDrop }) {
  const dispatch = useDispatch();

  const hancdleClick = (e) => {
    dispatch(changeStatusData({ id: id, status: status }));
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
