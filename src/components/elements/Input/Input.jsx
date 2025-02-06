import React from "react";
import classes from "./Input.module.scss";

export default function Input({
  name,
  label,
  type = "text",
  placeholder = "",
  valueInput,
  onChange,
}) {
  return (
    <fieldset className={classes.wrapper}>
      <label className={classes.title} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes.input}
        placeholder={placeholder}
        value={valueInput}
        onChange={(e) => onChange(e.target.value)}
        id={name}
        type={type}
        name={name}
      />
    </fieldset>
  );
}
