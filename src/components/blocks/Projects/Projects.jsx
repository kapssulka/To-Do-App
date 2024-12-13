import classes from "./Projects.module.scss";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";
import ProjectItem from "../../elements/ProjectItem/ProjectItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotContent from "../NotContent/NotContent";

export default function Projects() {
  const data = useSelector((state) => state.projects.data);

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Title>Projects</Title>

        <Link to="/create-project">
          <Button className={classes.buttonAdd}>Create Project</Button>
        </Link>
      </header>

      {data.length < 1 && <NotContent text="Add new project?" />}

      <div className={classes.grid}>
        {data.length > 0 &&
          data.map((item) => (
            <ProjectItem
              id={item.id}
              status={item.status}
              key={item.id}
              title={item.title}
              description={item.description}
              subTasksCount={item.tasks.length}
            />
          ))}
      </div>
    </div>
  );
}
