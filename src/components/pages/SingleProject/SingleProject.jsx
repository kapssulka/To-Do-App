import React from "react";
import classes from "./SingleProject.module.scss";
import SingleProjectTasks from "../../blocks/SingleProjectTasks/SingleProjectTasks";
import AsideSingleProject from "../../blocks/AsideSingleProject/AsideSingleProject";

export default function SingleProject() {
  return (
    <section className={classes.wrapper}>
      <SingleProjectTasks />

      <AsideSingleProject />
    </section>
  );
}
