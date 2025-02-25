import { ForwardedRef, forwardRef } from "react";
import classes from "./InputAdd.module.scss";
import cn from "classnames";
import ErrorMesasge from "../ErrorMesasge/ErrorMesasge";

interface IProps {
  height: null | number;
  className: string;
  label?: string;
  onInput: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea: boolean;
  placeholder: string;
  hasError: boolean;
  type?: "text" | "email" | "password";
}

const InputAdd = function (
  {
    height = null,
    className,
    type = "text",
    label,
    onInput,
    isTextarea = false,
    placeholder,
    hasError,
    ...props
  }: IProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
) {
  return (
    <fieldset
      {...props}
      className={cn(classes.wrapper, className, {
        [classes.error]: hasError,
      })}
    >
      <label>{label}</label>
      {!isTextarea && (
        <input
          onInput={onInput}
          ref={ref as ForwardedRef<HTMLInputElement>}
          style={{ height: height ? `${height}px` : "" }}
          placeholder={placeholder}
          type={type}
        />
      )}
      {isTextarea && (
        <textarea
          onInput={onInput}
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
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

export default forwardRef<HTMLInputElement | HTMLTextAreaElement, IProps>(
  InputAdd
);
