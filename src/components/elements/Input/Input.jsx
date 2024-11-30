import React from "react";
import classes from "./Input.module.scss";

export default function Input({
  name,
  label,
  type = "text",
  placeholder = "",
}) {
  return (
    <fieldset className={classes.wrapper}>
      <label className={classes.title} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes.input}
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
      />
    </fieldset>
  );
}
