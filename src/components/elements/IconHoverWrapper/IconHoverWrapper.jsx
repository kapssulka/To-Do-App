import React from "react";
import classes from "./IconHoverWrapper.module.scss";

export default function IconHoverWrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}
