import React from "react";
import classes from "./AsideProjects.module.scss";
import ProjectsCountInfo from "../../elements/ProjectsCountInfo/ProjectsCountInfo";
import CircleProgressBar from "../../elements/CircleProgressBar/CircleProgressBar";

export default function AsideProjects({ data = [] }) {
  const waitingProject =
    data?.filter((item) => item.status === "waiting") || [];
  const progressProject =
    data?.filter((item) => item.status === "progress") || [];
  const complitedProject =
    data?.filter((item) => item.status === "complited") || [];

  const percentageСompleted =
    Math.floor((complitedProject.length * 100) / data?.length) || 0;

  return (
    <aside className={classes.aside}>
      <h3 className={classes.title}>Projects info</h3>
      <CircleProgressBar value={percentageСompleted} />
      {/* progress bar */}

      <div className={classes.projectsStatus}>
        <h4>Projects status</h4>

        <div className={classes.projectsStatus__grid}>
          <ProjectsCountInfo count={data?.length} />
          <ProjectsCountInfo
            count={complitedProject.length}
            title="complited"
            status="complited"
          />
          <ProjectsCountInfo
            count={progressProject.length}
            title="in progress"
            status="progress"
          />
          <ProjectsCountInfo
            count={waitingProject.length}
            title="waiting"
            status="waiting"
          />
        </div>
      </div>
      {/* projects */}
    </aside>
  );
}
