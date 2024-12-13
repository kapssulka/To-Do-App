import React from "react";
import classes from "./NotContent.module.scss";

export default function NotContent({ text }) {
  return (
    <div className={classes.wrapper}>
      <p>{text}</p>
      <img className={classes.img} src="/publick/images/arrow2.png" />
    </div>
  );
}
