import { ReactNode } from "react";
import classes from "./Title.module.scss";
import cn from "classnames";

interface IProps {
  vatiant?: string;
  children: ReactNode;
  className?: string;
}

export default function Title({ vatiant = "h1", children, className }: IProps) {
  switch (vatiant) {
    case "h1":
      return <h1 className={cn(classes.h1, className)}>{children}</h1>;
      break;
    case "h2":
      return <h2 className={cn(classes.h2, className)}>{children}</h2>;
      break;
    case "h3":
      return <h3 className={cn(classes.h3, className)}>{children}</h3>;
      break;
    case "h4":
      return <h4 className={cn(classes.h4, className)}>{children}</h4>;
      break;
    case "h5":
      return <h5 className={cn(classes.h5, className)}>{children}</h5>;
      break;
    case "h6":
      return <h6 className={cn(classes.h6, className)}>{children}</h6>;
      break;

    default:
      return <h1 className={classes.h7}>{children}</h1>;
      break;
  }
}
