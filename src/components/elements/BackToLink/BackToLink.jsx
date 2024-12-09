import React from "react";
import classes from "./BackToLink.module.scss";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function BackToLink({ to = "/" }) {
  return (
    <Link to={to} className={classes.backTo}>
      <FaArrowLeft size={30} className={classes.backTo__icon} />
    </Link>
  );
}
