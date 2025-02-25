import { useEffect, useState } from "react";
import classes from "./TaskItem.module.scss";
import cn from "classnames";
import CheckBox from "../CheckBox/CheckBox";
import { MdOutlineDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { FaCheck } from "react-icons/fa";

import TextareaTasks from "../TextareaTasks/TextareaTasks";
import { usePatchDataMutation } from "../../../redux/projectsApi";
import { ITasks, Tasks } from "../../../types/data";

interface IProps {
  taskText: string;
  idProject: string;
  allTasks: Tasks;
  idTask: string;
}

export default function TaskItem({
  taskText,
  idProject,
  allTasks,
  idTask,
}: IProps) {
  const [changeFieldData] = usePatchDataMutation();

  const [focusForEdit, setFocusForEdit] = useState(false);

  const currentTask: ITasks | undefined = allTasks.find(
    (task) => task.id === idTask
  );

  const [completedTask, setCompletedTask] = useState(
    currentTask?.completed || false
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const newObj = allTasks.map((task) => {
      if (task.id === idTask) {
        return {
          ...task,
          completed: input.checked,
        };
      }
      return task;
    });
    setCompletedTask(input.checked);
    changeFieldData([idProject, { tasks: newObj }]).unwrap();
  };

  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filteredTasks: Tasks = allTasks.filter((task) => task.id !== idTask);

    changeFieldData([idProject, { tasks: filteredTasks }]).unwrap();
  };

  useEffect(() => {
    if (currentTask) {
      setCompletedTask(currentTask?.completed);
    }
  }, [allTasks]);

  return (
    <div
      className={cn(classes.wrapper, {
        [classes.completedTask]: completedTask,
      })}
    >
      <div className={classes.left}>
        <CheckBox
          checked={completedTask || false}
          onChange={handleChange}
          style={{ marginRight: "20px" }}
          icon={<FaCheck />}
        />
        <TextareaTasks
          setFocusForEdit={setFocusForEdit}
          focusForEdit={focusForEdit}
          completedTask={completedTask}
          idTask={idTask}
          allTasks={allTasks}
          idProject={idProject}
          taskText={taskText}
        />
      </div>

      <div className={classes.buttons}>
        <button
          onClick={(e) => setFocusForEdit((prev) => !prev)}
          className={cn(classes.edit, {
            [classes.edited]: focusForEdit,
          })}
        >
          <MdEdit size={25} />
        </button>

        <button onClick={deleteTask} className={classes.delete}>
          <MdOutlineDelete size={25} />
        </button>
      </div>
    </div>
  );
}
