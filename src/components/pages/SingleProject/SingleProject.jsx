import React, { useEffect } from "react";
import classes from "./SingleProject.module.scss";
import SingleProjectTasks from "../../blocks/SingleProjectTasks/SingleProjectTasks";
import AsideSingleProject from "../../blocks/AsideSingleProject/AsideSingleProject";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData } from "../../../redux/projectsSlise";

export default function SingleProject() {
  const { id } = useParams();
  const currentProjectData = useSelector((state) => state.projects.singleData);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getSingleData(id));
  }, [dispath]);

  const projectTasks = currentProjectData?.tasks || [];

  return (
    <section className={classes.wrapper}>
      <SingleProjectTasks
        id={id}
        title={currentProjectData.title}
        projectTasks={projectTasks}
        statusProject={currentProjectData.status}
      />

      <AsideSingleProject
        coutTasks={projectTasks.length}
        description={currentProjectData.description}
      />
    </section>
  );
}
