import React from "react";
import classes from "./SingleProjectTasks.module.scss";
import ProjectTitle from "../../elements/ProjectTitle/ProjectTitle";
import Button from "../../elements/Button/Button";
import TaskItem from "../../elements/TaskItem/TaskItem";
import BackToLink from "../../elements/BackToLink/BackToLink";
import InputAdd from "../../elements/InputAdd/InputAdd";

export default function SingleProjectTasks() {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.left}>
          <BackToLink to="/" />

          <ProjectTitle> Web</ProjectTitle>
        </div>

        <div className={classes.right}>
          <InputAdd className={classes.input} placeholder="Add new task" />
          <Button>Add tasks</Button>
        </div>
      </header>

      <div className={classes.tasksWrapper}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
}
