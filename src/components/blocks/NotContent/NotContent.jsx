import React from "react";
import classes from "./NotContent.module.scss";

export default function NotContent({ text, right, left, top, bottom }) {
  return (
    <div className={classes.wrapper}>
      <p>{text}</p>
      <img
        style={{
          right: right ? `${right}%` : "",
          left: left ? `${left}px` : "",
          top: top ? `${top}px` : "",
          bottom: bottom ? `${bottom}px` : "",
        }}
        className={classes.img}
        src="/publick/images/arrow2.png"
      />
    </div>
  );
}
