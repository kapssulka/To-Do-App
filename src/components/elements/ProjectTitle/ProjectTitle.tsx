import { IStatus } from "../../../types/data";
import classes from "./ProjectTitle.module.scss";
import cn from "classnames";

interface IProps {
  children: string;
  status: IStatus;
}

export default function ProjectTitle({
  children = "Title",
  status = "total",
}: IProps) {
  return (
    <h3
      className={cn(classes.title, {
        [classes.isTotal]: status === "total",
        [classes.inProgress]: status === "progress",
        [classes.isCompleted]: status === "completed",
        [classes.isWaiting]: status === "waiting",
      })}
    >
      {children}
    </h3>
  );
}
