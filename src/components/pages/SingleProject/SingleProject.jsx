import classes from "./SingleProject.module.scss";
import SingleProjectTasks from "../../blocks/SingleProjectTasks/SingleProjectTasks";
import AsideSingleProject from "../../blocks/AsideSingleProject/AsideSingleProject";
import { useParams } from "react-router-dom";
import { useGetSingleDataQuery } from "../../../redux/projectsApi";

export default function SingleProject() {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleDataQuery(id);

  const currentProjectData = data?.[0] || [];

  const completedTasks = currentProjectData?.tasks?.filter(
    (task) => task.completed
  );

  return (
    <section className={classes.wrapper}>
      <SingleProjectTasks
        statusProject={currentProjectData.status}
        title={currentProjectData.title}
        projectTasks={currentProjectData.tasks}
        idProject={currentProjectData.id}
        isLoading={isLoading}
      />

      <AsideSingleProject
        description={currentProjectData.description}
        coutTasks={currentProjectData.tasks?.length}
        completedTasks={completedTasks?.length}
      />
    </section>
  );
}
