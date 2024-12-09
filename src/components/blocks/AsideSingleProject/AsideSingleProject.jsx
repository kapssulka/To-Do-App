import React from "react";
import classes from "./AsideSingleProject.module.scss";
import Title from "../../elements/Title/Title";
import ProjectsCountInfo from "../../elements/ProjectsCountInfo/ProjectsCountInfo";

export default function AsideSingleProject() {
  // test
  let description = true;
  return (
    <aside className={classes.wrapper}>
      <Title className={classes.title} vatiant="h3">
        Project info
      </Title>
      <div className={classes.description}>
        <Title vatiant="h3">Description:</Title>
        {description && (
          <h4
            style={{
              textTransform: "uppercase",
              opacity: 0.2,
              fontWeight: 600,
            }}
          >
            No description
          </h4>
        )}
        {!description && (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            illo! Dignissimos culpa illum repellat praesentium earum pariatur,
            dolor doloribus numquam.
          </p>
        )}
      </div>
      <div className={classes.infoBlock}>
        <ProjectsCountInfo />
        <ProjectsCountInfo status="complited" title="Complited" />
      </div>
    </aside>
  );
}
