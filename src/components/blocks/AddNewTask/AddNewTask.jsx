import React, { useRef, useState } from "react";
import classes from "./AddNewTask.module.scss";
import InputAdd from "../../elements/InputAdd/InputAdd";
import Button from "../../elements/Button/Button";
import { useDispatch } from "react-redux";
import useNewTask from "../../../hooks/useNewTask";
import { changeFieldData } from "../../../redux/projectsSlise";

export default function AddNewTask({ projectTasks, idProject }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [hasTaskValue, setHasTaskValue] = useState(true);

  const handleInput = (e) => {
    if (inputRef.current.value.length > 0) {
      console.log("Есть значеничя");
      setHasTaskValue(true);
    }
  };

  const handleClick = (e) => {
    if (!inputRef.current) return;

    const textarea = inputRef.current;

    const taskValue = textarea.value.trim();

    if (taskValue.length > 0) {
      const taskObj = useNewTask(taskValue);
      dispatch(
        changeFieldData([idProject, { tasks: [taskObj, ...projectTasks] }])
      );
      textarea.value = "";

      setHasTaskValue(true);
    } else setHasTaskValue(false);
  };

  return (
    <div className={classes.inputWrapper}>
      <InputAdd
        hasError={!hasTaskValue}
        onInput={handleInput}
        height={100}
        textarea={true}
        ref={inputRef}
        className={classes.input}
        placeholder="Add new task"
      />
      <Button onClick={handleClick}>Add tasks</Button>
    </div>
  );
}
