import React from "react";
import classes from "./AvatarUser.module.scss";

export default function AvatarUser({ src, alt = "user avatar", size = 50 }) {
  return (
    <div
      style={{ height: `${size}px`, width: `${size}px` }}
      className={classes.wrapper}
    >
      <img src={src} alt={alt} />
    </div>
  );
}
