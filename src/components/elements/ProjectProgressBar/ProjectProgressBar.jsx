import React from "react";
import classes from "./ProjectProgressBar.module.scss";

export default function ProjectProgressBar({ progressCount = 0 }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cout}>{progressCount}%</div>
      <div className={classes.progressBar}>
        <div
          style={{ width: `${progressCount}%` }}
          className={classes.progressBar__progress}
        ></div>
      </div>
    </div>
  );
}
