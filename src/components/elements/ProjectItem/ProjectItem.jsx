import React from "react";
import classes from "./ProjectItem.module.scss";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import ProjectProgressBar from "../ProjectProgressBar/ProjectProgressBar";
import { Link } from "react-router-dom";

export default function ProjectItem({
  title,
  description,
  progress,
  progressCount,
  subTasksCount = 1,
}) {
  // TEST
  let id = 1;
  const a = "inProgress";
  return (
    <Link to={`/projects/${id}`} className={classes.wrapper}>
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
    </Link>
  );
}
