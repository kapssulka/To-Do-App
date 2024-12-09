import React, { useState } from "react";
import classes from "./TaskItem.module.scss";
import CheckBox from "../CheckBox/CheckBox";
import { MdDeleteOutline } from "react-icons/md";
import cn from "classnames";

import { FaCheck } from "react-icons/fa";

export default function TaskItem({ taskText }) {
  const [complitedTasks, setComplitedTasks] = useState(false);
  const handleClick = (e) => {
    if (e.target.tagName === "INPUT") {
      const input = e.target;
      setComplitedTasks(input.checked);
    }
  };

  return (
    <div
      className={cn(classes.wrapper, {
        [classes.complitedTasks]: complitedTasks,
      })}
    >
      <CheckBox
        onClick={handleClick}
        style={{ marginRight: "20px" }}
        icon={<FaCheck />}
      />

      <div className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Impedit, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Impedit, deleniti.
      </div>

      <button className={classes.delete}>
        <MdDeleteOutline size={25} />
      </button>
    </div>
  );
}
