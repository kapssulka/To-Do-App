import React from "react";
import classes from "./SuccessBlock.module.scss";
import Button from "../../elements/Button/Button";
import { Link } from "react-router-dom";

export default function SuccessBlock({ text, setAdded }) {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>Проект успешно создан!</p>
      <div className={classes.buttonWrapper}>
        <Link to="/">
          <Button>К проектам</Button>
        </Link>
        <Button onClick={setAdded}>Создать ещё</Button>
      </div>
    </div>
  );
}
