import classes from "./ProjectItem.module.scss";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import { BsListTask } from "react-icons/bs";
import ProjectProgressBar from "../ProjectProgressBar/ProjectProgressBar";
import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import { IProjectData } from "../../../types/data";

interface IProps extends Omit<IProjectData, "userId" | "tasks"> {
  subTasksCount: number;
  progressCount: number;
}

export default function ProjectItem({
  title,
  description,
  status,
  progressCount,
  subTasksCount = 0,
  id,
}: IProps) {
  return (
    <Link to={`/projects/${id}`} className={classes.wrapper}>
      <div className={classes.topBlock}>
        <div className={classes.head}>
          <ProjectTitle status={status}>{title}</ProjectTitle>

          <DropDown className={classes.drop} idProject={id} />
        </div>
        <p className={classes.description}>{description}</p>
      </div>

      <div className={classes.bottomBlock}>
        <ProjectProgressBar progressCount={progressCount} />

        <div className={classes.subTasks}>
          <BsListTask />
          <span> {subTasksCount}</span>
        </div>
      </div>
    </Link>
  );
}
