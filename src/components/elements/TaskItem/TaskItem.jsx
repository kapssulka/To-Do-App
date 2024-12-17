import React, { useState } from "react";
import classes from "./TaskItem.module.scss";
import cn from "classnames";
import CheckBox from "../CheckBox/CheckBox";
import { MdOutlineDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { FaCheck } from "react-icons/fa";

import TextareaTasks from "../TextareaTasks/TextareaTasks";
import { useDispatch } from "react-redux";
import { changeFieldData } from "../../../redux/projectsSlise";

export default function TaskItem({ taskText, idProject, allTasks, idTask }) {
  const [focusForEdit, setFocusForEdit] = useState(false);

  const currentTask = allTasks.find((task) => task.id === idTask);

  const [completedTask, setCompletedTask] = useState(currentTask.completed);
  const dispatch = useDispatch();

  const handleChange = (e) => {
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
    dispatch(changeFieldData([idProject, { tasks: newObj }]));
  };

  const deleteTask = (e) => {
    const filteredTasks = allTasks.filter((task) => task.id !== idTask);

    dispatch(changeFieldData([idProject, { tasks: filteredTasks }]));
  };

  return (
    <div
      className={cn(classes.wrapper, {
        [classes.completedTask]: completedTask,
      })}
    >
      <div className={classes.left}>
        <CheckBox
          checked={completedTask}
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
