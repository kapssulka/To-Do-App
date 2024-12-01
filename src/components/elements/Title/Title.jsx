import React from "react";
import classes from "./Title.module.scss";

export default function Title({ vatiant = "h1", children }) {
  switch (vatiant) {
    case "h1":
      return <h1 className={classes.h1}>{children}</h1>;
      break;
    case "h2":
      return <h2 className={classes.h2}>{children}</h2>;
      break;
    case "h3":
      return <h3 className={classes.h3}>{children}</h3>;
      break;
    case "h4":
      return <h4 className={classes.h4}>{children}</h4>;
      break;
    case "h5":
      return <h5 className={classes.h5}>{children}</h5>;
      break;
    case "h6":
      return <h6 className={classes.h6}>{children}</h6>;
      break;

    default:
      return <h1 className={classes.h7}>{children}</h1>;
      break;
  }
}
