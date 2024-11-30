import React from "react";
import classes from "./Button.module.scss";
import cn from "classnames";

export default function Button({ type = "", children, className }) {
  return (
    <button className={cn(classes.button, className)} type={type}>
      {children}
    </button>
  );
}
