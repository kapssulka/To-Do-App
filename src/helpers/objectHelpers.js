import { auth } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export function createNewTask(taskValue, completed = false) {
  const obj = {
    id: uuidv4(),
    text: taskValue,
    completed: completed,
  };
  return obj;
}

export function createProjectData(title, description, tasks = []) {
  const user = auth.currentUser;

  const obj = {
    id: uuidv4(),
    userId: user.uid,
    title: title,
    description: description,
    status: "total",
    tasks: tasks,
  };
  return obj;
}

export const createFormProjectData = (arrayInputsRef, title, description) => {
  const filtredEmptyTasks = arrayInputsRef.filter((item) => item.value);

  const tasks = filtredEmptyTasks.map((item, _) => {
    const obj = createNewTask(item.value);
    return obj;
  });

  return createProjectData(title, description, tasks);
};
