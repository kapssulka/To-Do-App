import React from "react";
import classes from "./Projects.module.scss";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";
import ProjectItem from "../../elements/ProjectItem/ProjectItem";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Title>Projects</Title>

        <Link to="/create-project">
          <Button className={classes.buttonAdd}>Create Project</Button>
        </Link>
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
