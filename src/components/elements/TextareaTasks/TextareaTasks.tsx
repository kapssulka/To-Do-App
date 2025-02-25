import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import classes from "./TextareaTasks.module.scss";
import cn from "classnames";
import { usePatchDataMutation } from "../../../redux/projectsApi";
import { Tasks } from "../../../types/data";
import { adjustHeight } from "../../../helpers/utils";

interface IProps {
  idTask: string;
  allTasks: Tasks;
  idProject: string;
  taskText: string;
  completedTask: boolean;
  focusForEdit: boolean;
  setFocusForEdit: Dispatch<SetStateAction<boolean>>;
}

export default function TextareaTasks({
  idTask,
  allTasks,
  idProject,
  taskText,
  completedTask,
  focusForEdit,
  setFocusForEdit,
}: IProps) {
  const [changeFieldData] = usePatchDataMutation();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [inputTekst, setInputTekst] = useState<string>(taskText);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight(textareaRef.current);
    setInputTekst(e.target.value);
  };

  useEffect(() => {
    setInputTekst(taskText);
  }, [allTasks]);

  useEffect(() => {
    adjustHeight(textareaRef.current);
  }, []);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      focusForEdit ? textarea.focus() : textarea.blur();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  }, [focusForEdit]);

  return (
    <textarea
      ref={textareaRef}
      className={cn(classes.task, {
        [classes.taskComplited]: completedTask,
      })}
      onChange={handleChange}
      onFocus={(e) => setFocusForEdit(true)}
      onBlur={handleBlur}
      value={inputTekst}
    ></textarea>
  );
}
