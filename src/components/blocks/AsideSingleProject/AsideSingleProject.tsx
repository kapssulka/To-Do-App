import classes from "./AsideSingleProject.module.scss";
import Title from "../../elements/Title/Title";
import ProjectsCountInfo from "../../elements/ProjectsCountInfo/ProjectsCountInfo";

interface IProps {
  description: string;
  coutTasks: number;
  completedTasks: number;
}

export default function AsideSingleProject({
  description,
  coutTasks,
  completedTasks,
}: IProps) {
  return (
    <aside className={classes.wrapper}>
      <Title className={classes.title} vatiant="h3">
        Project info
      </Title>
      <div className={classes.description}>
        <Title vatiant="h3">Description:</Title>
        {!description && (
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
        {description && <p>{description}</p>}
      </div>
      <div className={classes.infoBlock}>
        <ProjectsCountInfo count={coutTasks} />
        <ProjectsCountInfo
          count={completedTasks}
          status="completed"
          title="Completed"
        />
      </div>
    </aside>
  );
}
