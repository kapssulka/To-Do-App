import React from "react";
import classes from "./CircleProgressBar.module.scss";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircleProgressBar({ value = 0 }) {
  return (
    <div className={classes.wrapper}>
      <CircularProgressbar value={value} className={classes.circle} />
      <div className={classes.bgCircle}></div>
      <div className={classes.text}>{value}%</div>
    </div>
  );
}
