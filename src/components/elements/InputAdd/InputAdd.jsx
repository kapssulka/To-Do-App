import React, { forwardRef } from "react";
import classes from "./InputAdd.module.scss";
import cn from "classnames";

const InputAdd = function (
  {
    className,
    type = "text",
    label,
    textarea = false,
    isDelete = false,
    placeholder,
    ...props
  },
  ref
) {
  return (
    <fieldset {...props} className={cn(classes.wrapper, className)}>
      <label>{label}</label>
      {!textarea && <input ref={ref} placeholder={placeholder} type={type} />}
      {textarea && <textarea ref={ref} placeholder={placeholder}></textarea>}
    </fieldset>
  );
};

export default forwardRef(InputAdd);
