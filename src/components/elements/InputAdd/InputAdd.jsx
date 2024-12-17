import React, { forwardRef } from "react";
import classes from "./InputAdd.module.scss";
import cn from "classnames";
import ErrorMesasge from "../ErrorMesasge/ErrorMesasge";

const InputAdd = function (
  {
    height = null,
    className,
    type = "text",
    label,
    onInput,
    textarea = false,
    isDelete = false,
    placeholder,
    hasError,
    ...props
  },
  ref
) {
  return (
    <fieldset
      {...props}
      className={cn(classes.wrapper, className, {
        [classes.error]: hasError,
      })}
    >
      <label>{label}</label>
      {!textarea && (
        <input
          onInput={onInput}
          ref={ref}
          style={{ height: height ? `${height}px` : "" }}
          placeholder={placeholder}
          type={type}
        />
      )}
      {textarea && (
        <textarea
          onInput={onInput}
          ref={ref}
          style={{ height: height ? `${height}px` : "" }}
          placeholder={placeholder}
        ></textarea>
      )}

      {hasError && (
        <ErrorMesasge text="To add, you need to fill in the field!" />
      )}
    </fieldset>
  );
};

export default forwardRef(InputAdd);
