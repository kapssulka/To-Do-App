import React from "react";
import classes from "./InputSearch.module.scss";
import { CiSearch } from "react-icons/ci";

export default function InputSearch({ placeholder }) {
  return (
    <label className={classes.wrapper}>
      <input className={classes.input} placeholder={placeholder} type="text" />
      <CiSearch size={40} className={classes.iconSearch} />
    </label>
  );
}
