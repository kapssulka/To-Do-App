import React from "react";
import classes from "./ProjectsBoard.module.scss";
import Projects from "../../blocks/Projects/Projects";

export default function TasksBoard() {
  return (
    <section className={classes.wrapper}>
      <Projects />
    </section>
  );
}
