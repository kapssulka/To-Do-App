import React from "react";
import classes from "./ProjectsCountInfo.module.scss";
import cn from "classnames";

export default function ProjectsCountInfo({
  title = "total",
  count = 0,
  status = "total",
}) {
  return (
    <div
      className={cn(classes.wrapper, {
        [classes.total]: status === "total",
        [classes.progress]: status === "progress",
        [classes.waiting]: status === "waiting",
        [classes.complited]: status === "complited",
      })}
    >
      <div className={classes.title}>{title}</div>

      <div
        className={cn(classes.count, {
          [classes.total]: status === "total",
          [classes.progress]: status === "progress",
          [classes.waiting]: status === "waiting",
          [classes.complited]: status === "complited",
        })}
      >
        {count}
      </div>
    </div>
  );
}
