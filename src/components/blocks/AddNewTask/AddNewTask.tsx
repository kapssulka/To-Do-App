import { useRef, useState } from "react";
import classes from "./AddNewTask.module.scss";
import InputAdd from "../../elements/InputAdd/InputAdd";
import Button from "../../elements/Button/Button";
import { usePatchDataMutation } from "../../../redux/projectsApi";
import { createNewTask } from "../../../helpers/objectHelpers";
import { Tasks } from "../../../types/data";

interface IProps {
  projectTasks: Tasks;
  idProject: string;
}

export default function AddNewTask({ projectTasks, idProject }: IProps) {
  const [addNewTask] = usePatchDataMutation();

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const [hasTaskValue, setHasTaskValue] = useState(true);

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (inputRef.current && inputRef.current.value.length > 0) {
      setHasTaskValue(true);
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!inputRef.current) return;

    const textarea = inputRef.current;

    const taskValue = textarea.value.trim();

    if (taskValue.length > 0) {
      const taskObj = createNewTask(taskValue);

      await addNewTask([
        idProject,
        { tasks: [taskObj, ...projectTasks] },
      ]).unwrap();

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
        isTextarea={true}
        ref={inputRef}
        className={classes.input}
        placeholder="Add new task"
      />
      <Button onClick={handleClick}>Add tasks</Button>
    </div>
  );
}
