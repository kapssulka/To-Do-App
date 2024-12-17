import React from "react";
import classes from "./ErrorMesasge.module.scss";

export default function ErrorMesasge({ text }) {
  return <div className={classes.error}>{text}</div>;
}
