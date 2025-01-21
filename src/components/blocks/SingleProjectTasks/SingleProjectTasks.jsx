import classes from "./SingleProjectTasks.module.scss";
import ProjectTitle from "../../elements/ProjectTitle/ProjectTitle";
import TaskItem from "../../elements/TaskItem/TaskItem";
import BackToLink from "../../elements/BackToLink/BackToLink";
import DropDown from "../../elements/DropDown/DropDown";
import NotContent from "../NotContent/NotContent";
import AddNewTask from "../AddNewTask/AddNewTask";
import { useEffect, useState } from "react";

export default function SingleProjectTasks({
  statusProject,
  title,
  projectTasks = [],
  idProject,
  isLoading,
}) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const sortProjectTasks = [...projectTasks].sort(
      (a, b) => a.completed - b.completed
    );
    setTasks(sortProjectTasks);
  }, [projectTasks]);

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.left}>
          <BackToLink to="/" />

          <ProjectTitle status={statusProject}>{title}</ProjectTitle>
        </div>

        <div className={classes.right}>
          <AddNewTask idProject={idProject} projectTasks={projectTasks} />

          <DropDown idProject={idProject} />
        </div>
      </header>

      {tasks?.length < 1 && isLoading != "loading" && (
        <NotContent right={10} text="Add new task" />
      )}
      {projectTasks.length > 0 && (
        <div className={classes.tasksWrapper}>
          {projectTasks.map((item, index) => {
            return (
              <TaskItem
                idTask={item.id}
                key={index}
                idProject={idProject}
                allTasks={projectTasks}
                taskText={item.text}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
