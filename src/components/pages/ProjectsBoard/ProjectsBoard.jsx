import React from "react";
import classes from "./ProjectsBoard.module.scss";
import Projects from "../../blocks/Projects/Projects";
import AsideProjects from "../../blocks/AsideProjects/AsideProjects";
import { useGetDataQuery } from "../../../redux/projectsAPI";

export default function TasksBoard() {
  const { data } = useGetDataQuery();

  return (
    <section className={classes.wrapper}>
      <Projects data={data} />
      <AsideProjects data={data} />
    </section>
  );
}
