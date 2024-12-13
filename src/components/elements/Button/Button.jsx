import React from "react";
import classes from "./Button.module.scss";
import cn from "classnames";

export default function Button({ type = "", children, className, ...props }) {
  return (
    <button {...props} className={cn(classes.button, className)} type={type}>
      {children}
    </button>
  );
}
