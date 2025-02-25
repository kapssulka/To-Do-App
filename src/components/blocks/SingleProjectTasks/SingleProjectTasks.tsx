import classes from "./SingleProjectTasks.module.scss";
import ProjectTitle from "../../elements/ProjectTitle/ProjectTitle";
import TaskItem from "../../elements/TaskItem/TaskItem";
import BackToLink from "../../elements/BackToLink/BackToLink";
import DropDown from "../../elements/DropDown/DropDown";
import NotContent from "../NotContent/NotContent";
import AddNewTask from "../AddNewTask/AddNewTask";
import { useEffect, useState } from "react";
import { usePatchDataMutation } from "../../../redux/projectsApi";
import { Status, Tasks } from "../../../types/data";

interface IProps {
  statusProject: Status;
  title: string;
  projectTasks: Tasks;
  idProject: string;
  isLoading: boolean;
}

export default function SingleProjectTasks({
  statusProject,
  title,
  projectTasks = [],
  idProject,
  isLoading,
}: IProps) {
  const [changeData] = usePatchDataMutation();

  const [tasks, setTasks] = useState<Tasks>([]);

  useEffect(() => {
    const sortProjectTasks = [...projectTasks].sort((a, b) => {
      if (a.completed === b.completed) return 0;

      return a.completed ? 1 : -1;
    });

    setTasks(sortProjectTasks);
  }, [projectTasks]);

  useEffect(() => {
    const completedTasks = projectTasks.filter((item) => item.completed);
    if (idProject) {
      if (projectTasks?.length == completedTasks.length) {
        changeData([idProject, { status: "completed" }]).unwrap();
      }
      if (projectTasks?.length > completedTasks.length) {
        if (completedTasks.length > 0) {
          changeData([idProject, { status: "progress" }]).unwrap();
        }
      }
    }
  }, [projectTasks, idProject]);

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

      {tasks?.length < 1 && !isLoading && (
        <NotContent right={10} text="Add new task" />
      )}
      {tasks.length > 0 && (
        <div className={classes.tasksWrapper}>
          {tasks.map((item, index) => {
            return (
              <TaskItem
                idTask={item.id}
                key={index}
                idProject={idProject}
                allTasks={tasks}
                taskText={item.text}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
