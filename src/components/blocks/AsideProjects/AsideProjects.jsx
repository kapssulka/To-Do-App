import React from "react";
import classes from "./AsideProjects.module.scss";
import ProjectsCountInfo from "../../elements/ProjectsCountInfo/ProjectsCountInfo";
import CircleProgressBar from "../../elements/CircleProgressBar/CircleProgressBar";

export default function AsideProjects() {
  return (
    <aside className={classes.aside}>
      <h3 className={classes.title}>Projects info</h3>
      <CircleProgressBar value={78} />
      {/* progress bar */}

      <div className={classes.projectsStatus}>
        <h4>Projects status</h4>

        <div className={classes.projectsStatus__grid}>
          <ProjectsCountInfo />
          <ProjectsCountInfo title="complited" status="complited" />
          <ProjectsCountInfo title="in progress" status="progress" />
          <ProjectsCountInfo title="waiting" status="waiting" />
        </div>
      </div>
      {/* projects */}
    </aside>
  );
}
