import classes from "./Projects.module.scss";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";
import ProjectItem from "../../elements/ProjectItem/ProjectItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotContent from "../NotContent/NotContent";

export default function Projects() {
  const data = useSelector((state) => state.projects.data);

  const calcPersentComplitedTasks = (tasks) => {
    let persentCompleted = 0;
    if (tasks.length > 0) {
      const completed = tasks.filter((task) => task.completed === true);
      persentCompleted = (100 * completed.length) / tasks.length;
    }

    return Math.round(persentCompleted);
  };

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
          data.map((item) => {
            // let persentCompleted = 0;
            // if (item.tasks.length > 0) {
            //   const completed = item.tasks.filter(
            //     (task) => task.completed === true
            //   );
            //   persentCompleted = (100 * completed.length) / item.tasks.length;
            // }
            const persentCompleted = calcPersentComplitedTasks(item.tasks);

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
