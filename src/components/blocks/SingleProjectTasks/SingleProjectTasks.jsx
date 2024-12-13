import React from "react";
import classes from "./SingleProjectTasks.module.scss";
import ProjectTitle from "../../elements/ProjectTitle/ProjectTitle";
import Button from "../../elements/Button/Button";
import TaskItem from "../../elements/TaskItem/TaskItem";
import BackToLink from "../../elements/BackToLink/BackToLink";
import InputAdd from "../../elements/InputAdd/InputAdd";
import DeleteProjectButton from "../../elements/DeleteProjectButton/DeleteProjectButton";
import DropDown from "../../elements/DropDown/DropDown";

export default function SingleProjectTasks({
  title = "Title",
  projectTasks = [],
  statusProject,
  id,
}) {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.left}>
          <BackToLink to="/" />

          <ProjectTitle status={statusProject}>{title}</ProjectTitle>
        </div>

        <div className={classes.right}>
          <div className={classes.inputWrapper}>
            <InputAdd className={classes.input} placeholder="Add new task" />
            <Button>Add tasks</Button>
          </div>
          {/* <DeleteProjectButton
            id={id}
            text="Delete project"
            size={20}
            className={classes.delete}
          /> */}

          <DropDown id={id} />
        </div>
      </header>

      <div className={classes.tasksWrapper}>
        {projectTasks.length > 0 &&
          projectTasks.map((item, index) => (
            <TaskItem key={index} taskText={item.text} />
          ))}
      </div>
    </div>
  );
}
