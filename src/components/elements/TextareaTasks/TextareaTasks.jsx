import React, { useEffect, useRef, useState } from "react";
import classes from "./TextareaTasks.module.scss";
import cn from "classnames";
import { usePatchDataMutation } from "../../../redux/projectsAPI";

export default function TextareaTasks({
  idTask,
  allTasks,
  idProject,
  taskText,
  completedTask,
  focusForEdit,
  setFocusForEdit,
}) {
  const [changeFieldData] = usePatchDataMutation();

  const textareaRef = useRef(null);

  const [inputTekst, setInputTekst] = useState(taskText);
  useEffect(() => {
    setInputTekst(taskText);
  }, [allTasks]);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Сбрасываем высоту
      textarea.style.height = `${textarea.scrollHeight}px`; // Устанавливаем высоту на основе содержимого
    }
  };

  const handleBlur = (e) => {
    setFocusForEdit(false);
    if (inputTekst.length < 1) {
      const filteredTasks = allTasks.filter((task) => task.id !== idTask);

      changeFieldData([idProject, { tasks: filteredTasks }]).unwrap();

      return;
    }
    if (inputTekst !== taskText) {
      const newObject = allTasks.map((task) => {
        if (task.id === idTask) {
          return {
            ...task,
            text: inputTekst,
          };
        }
        return task;
      });

      changeFieldData([idProject, { tasks: newObject }]).unwrap();
    }
  };

  const handleChange = (e) => {
    adjustHeight();
    setInputTekst(e.target.value);
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      focusForEdit ? textarea.focus() : textarea.blur();
    }
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }, [focusForEdit]);

  return (
    <textarea
      ref={textareaRef}
      className={cn(classes.task, {
        [classes.taskComplited]: completedTask,
      })}
      type="text"
      onChange={handleChange}
      onFocus={(e) => setFocusForEdit(true)}
      onBlur={handleBlur}
      value={inputTekst}
    ></textarea>
  );
}
