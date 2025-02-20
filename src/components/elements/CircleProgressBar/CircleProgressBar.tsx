import classes from "./CircleProgressBar.module.scss";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface IProps {
  value?: number;
}

export default function CircleProgressBar({ value = 0 }: IProps) {
  return (
    <div className={classes.wrapper}>
      <CircularProgressbar value={value} className={classes.circle} />
      <div className={classes.bgCircle}></div>
      <div className={classes.text}>{value}%</div>
    </div>
  );
}
