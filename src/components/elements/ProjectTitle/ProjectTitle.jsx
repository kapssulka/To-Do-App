import React from "react";
import classes from "./ProjectTitle.module.scss";
import cn from "classnames";

export default function ProjectTitle({
  children = "Title",
  progress = "total",
}) {
  return (
    <h3
      className={cn(classes.title, {
        [classes.isTotal]: progress === "total",
        [classes.inProgress]: progress === "progress",
        [classes.isComplited]: progress === "complited",
        [classes.isWaiting]: progress === "waiting",
      })}
    >
      {children}
    </h3>
  );
}
