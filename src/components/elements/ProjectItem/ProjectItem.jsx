import React from "react";
import classes from "./ProjectItem.module.scss";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import ProjectProgressBar from "../ProjectProgressBar/ProjectProgressBar";

export default function ProjectItem({
  title,
  description,
  progress,
  progressCount,
  subTasksCount = 1,
}) {
  const a = "inProgress";
  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>
        <ProjectTitle progress={progress}>{title}</ProjectTitle>
        <button className={classes.openMenu}>
          <IoEllipsisHorizontalSharp />
        </button>
      </div>

      <p className={classes.description}>{description}</p>
      <ProjectProgressBar progressCount={progressCount} />

      <div className={classes.subTasks}>
        <BsListTask />
        <span> {subTasksCount} </span>
      </div>
    </div>
  );
}
