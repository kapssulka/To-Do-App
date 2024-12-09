import React from "react";
import classes from "./ProjectsBoard.module.scss";
import Projects from "../../blocks/Projects/Projects";
import AsideProjects from "../../blocks/AsideProjects/AsideProjects";

export default function TasksBoard() {
  return (
    <section className={classes.wrapper}>
      <Projects />
      <AsideProjects />
    </section>
  );
}
