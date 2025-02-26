import { useEffect, useRef, useState } from "react";
import classes from "./AddNewForm.module.scss";
import InputAdd from "../../elements/InputAdd/InputAdd";
import Title from "../../elements/Title/Title";
import Button from "../../elements/Button/Button";
import { useAddProjectMutation } from "../../../redux/projectsApi";
import {
  createNewTask,
  createFormProjectData,
} from "../../../helpers/objectHelpers";
import { IProjectData, ITasks } from "../../../types/data";

interface IProps {
  setAdded: () => void;
}

export default function AddNewForm({ setAdded }: IProps) {
  const [taskInputs, setTaskInputs] = useState<number>(1);
  const [postData] = useAddProjectMutation();

  const tasksInputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]); // Массив рефов для инпутов
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLInputElement | null>(null);

  // Функция для перемещения фокуса на последний инпут
  const focusLastInput = () => {
    const lastInput = tasksInputRefs.current[tasksInputRefs.current.length - 1];
    if (lastInput) {
      lastInput.focus();
    }
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLFieldSetElement>) {
    let lastInput = tasksInputRefs.current[tasksInputRefs.current.length - 1];

    if (e.code === "Enter" && e.target === lastInput) {
      setTaskInputs((prev) => prev + 1);
    }
  }

  useEffect(() => {
    focusLastInput();
  }, [taskInputs]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleInputRef.current && descriptionInputRef.current) {
      const title: string = titleInputRef.current.value;
      const description: string = descriptionInputRef.current.value;

      if (title.length > 1 && description.length > 1) {
        const complitedData = createFormProjectData(
          tasksInputRefs.current,
          title,
          description
        );
        postData(complitedData).unwrap();
        setAdded();
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={(e) => e.code === "Enter" && e.preventDefault()}
      className={classes.form}
    >
      <InputAdd
        ref={titleInputRef}
        placeholder="Enter project title"
        label="Title"
      />
      <InputAdd
        ref={descriptionInputRef}
        placeholder="Enter project description"
        label="Description"
        isTextarea
      />

      <div className={classes.addTasks}>
        <Title className={classes.addTasksTitle} vatiant="h4">
          Add tasks immediately?
        </Title>

        {taskInputs &&
          Array.from({ length: taskInputs }, (_, index) => (
            <InputAdd
              isTextarea={true}
              height={100}
              ref={(el) => {
                if (el) tasksInputRefs.current[index] = el;
              }}
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
