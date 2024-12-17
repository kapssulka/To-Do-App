import classes from "./SingleProjectTasks.module.scss";
import ProjectTitle from "../../elements/ProjectTitle/ProjectTitle";
import TaskItem from "../../elements/TaskItem/TaskItem";
import BackToLink from "../../elements/BackToLink/BackToLink";
import DropDown from "../../elements/DropDown/DropDown";
import NotContent from "../NotContent/NotContent";
import { useSelector } from "react-redux";
import AddNewTask from "../AddNewTask/AddNewTask";

export default function SingleProjectTasks({
  statusProject,
  title,
  projectTasks = [],
  idProject,
}) {
  const statusRequest = useSelector((state) => state.projects.status);

  const sortProjectTasks = [...projectTasks].sort(
    (a, b) => a.completed - b.completed
  );

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

      {sortProjectTasks?.length < 1 && statusRequest != "loading" && (
        <NotContent right={10} text="Add new task" />
      )}
      {sortProjectTasks?.length > 0 && (
        <div className={classes.tasksWrapper}>
          {sortProjectTasks?.map((item, index) => {
            return (
              <TaskItem
                idTask={item.id}
                key={index}
                idProject={idProject}
                allTasks={sortProjectTasks}
                taskText={item.text}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
