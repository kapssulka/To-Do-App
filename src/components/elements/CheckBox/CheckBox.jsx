import React from "react";
import classes from "./CheckBox.module.scss";
import cn from "classnames";

export default function CheckBox({
  icon,
  id,
  label,
  labelSize = 16,
  labelColor = "#000",
  size,
  className,
  style,
  ...props
}) {
  return (
    <label
      {...props}
      style={style}
      htmlFor={id}
      className={cn(classes.wrapper, className)}
    >
      <input type="checkbox" name={id} id={id} hidden />

      <div
        style={{ width: size && `${size}px`, height: size && `${size}px` }}
        className={classes.checkbox}
      >
        {!icon && <span className={classes.checkMark}></span>}
        {icon && icon}
      </div>

      {label && (
        <span
          className={classes.label}
          style={{ fontSize: `${labelSize}px`, color: labelColor }}
        >
          {label}
        </span>
      )}
    </label>
  );
}
