import React from "react";
import classes from "./Projects.module.scss";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";
import ProjectItem from "../../elements/ProjectItem/ProjectItem";

export default function Projects() {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Title>Projects</Title>

        <Button className={classes.buttonAdd}>Create Progect</Button>
      </header>

      <div className={classes.grid}>
        <ProjectItem
          title="Web Design"
          description="This is very beautiful all"
        />
      </div>
    </div>
  );
}
