import classes from "./Projects.module.scss";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";
import ProjectItem from "../../elements/ProjectItem/ProjectItem";
import { Link } from "react-router-dom";
import NotContent from "../NotContent/NotContent";
import { IProjectData } from "../../../types/data";
import { calcPersentComplitedTasks } from "../../../helpers/utils";

export default function Projects({ data }: { data: IProjectData[] }) {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Title>Projects</Title>

        <Link to="/create-project">
          <Button className={classes.buttonAdd}>Create Project</Button>
        </Link>
      </header>

      {data?.length < 1 && <NotContent text="Add new project?" />}

      <div className={classes.grid}>
        {data?.length > 0 &&
          data?.map((item) => {
            const persentCompleted: number = calcPersentComplitedTasks(
              item.tasks
            );

            return (
              <ProjectItem
                id={item.id}
                status={item.status}
                key={item.id}
                title={item.title}
                description={item.description}
                subTasksCount={item.tasks.length}
                progressCount={persentCompleted}
              />
            );
          })}
      </div>
    </div>
  );
}
