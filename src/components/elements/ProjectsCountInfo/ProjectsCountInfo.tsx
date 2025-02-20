import { Status } from "../../../types/data";
import classes from "./ProjectsCountInfo.module.scss";
import cn from "classnames";

interface IProps {
  title?: string;
  count: number;
  status?: Status;
}

export default function ProjectsCountInfo({
  title = "total",
  count = 0,
  status = "total",
}: IProps) {
  return (
    <div
      className={cn(classes.wrapper, {
        [classes.total]: status === "total",
        [classes.progress]: status === "progress",
        [classes.waiting]: status === "waiting",
        [classes.complited]: status === "completed",
      })}
    >
      <div className={classes.title}>{title}</div>

      <div
        className={cn(classes.count, {
          [classes.total]: status === "total",
          [classes.progress]: status === "progress",
          [classes.waiting]: status === "waiting",
          [classes.complited]: status === "completed",
        })}
      >
        {count}
      </div>
    </div>
  );
}
