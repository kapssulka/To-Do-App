import React, { useEffect, useRef, useState } from "react";
import classes from "./AddNewForm.module.scss";
import InputAdd from "../../elements/InputAdd/InputAdd";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";

export default function AddNewForm() {
  const [taskInputs, setTaskInputs] = useState(1);
  const inputRefs = useRef([]); // Массив рефов для инпутов

  // Функция для перемещения фокуса на последний инпут
  const focusLastInput = () => {
    const lastInput = inputRefs.current[inputRefs.current.length - 1];
    if (lastInput) {
      lastInput.focus();
    }
  };

  function handleKeyDown(e) {
    let lastInput = inputRefs.current[inputRefs.current.length - 1];

    if (e.code === "Enter" && e.target === lastInput) {
      setTaskInputs((prev) => prev + 1);
      console.log(inputRefs);
    }
  }

  useEffect(() => {
    focusLastInput();
  }, [taskInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <InputAdd placeholder="Enter project title" label="Title" />
      <InputAdd
        placeholder="Enter project description"
        label="Description"
        textarea
      />

      <div className={classes.addTasks}>
        <Title className={classes.addTasksTitle} vatiant="h4">
          Add tasks immediately?
        </Title>

        {taskInputs &&
          Array.from({ length: taskInputs }, (_, index) => (
            <InputAdd
              isDelete
              ref={(el) => (inputRefs.current[index] = el)}
              key={index}
              onKeyDown={handleKeyDown}
              placeholder="Enter task"
            />
          ))}
      </div>

      <Button type="submit">Add project</Button>
    </form>
  );
}
