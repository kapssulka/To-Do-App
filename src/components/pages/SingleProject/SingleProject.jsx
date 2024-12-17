import React, { useEffect } from "react";
import classes from "./SingleProject.module.scss";
import SingleProjectTasks from "../../blocks/SingleProjectTasks/SingleProjectTasks";
import AsideSingleProject from "../../blocks/AsideSingleProject/AsideSingleProject";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../../redux/projectsSlise";

export default function SingleProject() {
  const { id } = useParams();
  const currentProjectData = useSelector((state) => state.projects.singleData);
  const dispath = useDispatch();

  const completedTasks = currentProjectData?.tasks?.filter(
    (task) => task.completed
  );

  useEffect(() => {
    dispath(getSingleData(id));
  }, [dispath]);

  return (
    <section className={classes.wrapper}>
      <SingleProjectTasks
        statusProject={currentProjectData.status}
        title={currentProjectData.title}
        projectTasks={currentProjectData.tasks}
        idProject={currentProjectData.id}
      />

      <AsideSingleProject
        description={currentProjectData.description}
        coutTasks={currentProjectData.tasks?.length}
        completedTasks={completedTasks?.length}
      />
    </section>
  );
}
