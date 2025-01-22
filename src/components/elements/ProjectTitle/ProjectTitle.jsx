import React from "react";
import classes from "./ProjectTitle.module.scss";
import cn from "classnames";

export default function ProjectTitle({ children = "Title", status = "total" }) {
  return (
    <h3
      className={cn(classes.title, {
        [classes.isTotal]: status === "total",
        [classes.inProgress]: status === "progress",
        [classes.isCompleted]: status === "completed",
        [classes.isWaiting]: status === "waiting",
      })}
    >
      {children}
    </h3>
  );
}
