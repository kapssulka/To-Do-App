import { HTMLProps } from "react";
import classes from "./Button.module.scss";
import cn from "classnames";

interface IProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "reset" | "submit";
  children: string;
  className?: string;
}

export default function Button({
  type = "button",
  children,
  className,
  ...props
}: IProps) {
  return (
    <button {...props} className={cn(classes.button, className)} type={type}>
      {children}
    </button>
  );
}
