import React, { useEffect, useRef, useState } from "react";
import classes from "./AddNewForm.module.scss";
import InputAdd from "../../elements/InputAdd/InputAdd";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";
import { useAddProjectMutation } from "../../../redux/projectsAPI";
import {
  createNewTask,
  createFormProjectData,
} from "../../../helpers/objectHelpers";

export default function AddNewForm({ setAdded }) {
  const [taskInputs, setTaskInputs] = useState(1);
  const [postData] = useAddProjectMutation();

  const tasksInputRefs = useRef([]); // Массив рефов для инпутов
  const titleRef = useRef(null); // Массив рефов для инпутов
  const descriptionRef = useRef(null); // Массив рефов для инпутов

  // Функция для перемещения фокуса на последний инпут
  const focusLastInput = () => {
    const lastInput = tasksInputRefs.current[tasksInputRefs.current.length - 1];
    if (lastInput) {
      lastInput.focus();
    }
  };

  function handleKeyDown(e) {
    let lastInput = tasksInputRefs.current[tasksInputRefs.current.length - 1];

    if (e.code === "Enter" && e.target === lastInput) {
      setTaskInputs((prev) => prev + 1);
    }
  }

  useEffect(() => {
    focusLastInput();
  }, [taskInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (title.length > 1 && description.length > 1) {
      const filtredEmptyTasks = tasksInputRefs.current.filter(
        (item) => item.value
      );

      const tasks = filtredEmptyTasks.map((item, index) => {
        const obj = createNewTask(item.value);
        return obj;
      });

      const complitedData = createFormProjectData(title, description, tasks);

      postData(complitedData).unwrap();
      setAdded();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={(e) => e.code === "Enter" && e.preventDefault()}
      className={classes.form}
    >
      <InputAdd
        ref={titleRef}
        placeholder="Enter project title"
        label="Title"
      />
      <InputAdd
        ref={descriptionRef}
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
              textarea={true}
              height={100}
              isDelete
              ref={(el) => (tasksInputRefs.current[index] = el)}
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
