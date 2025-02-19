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

export function createFormProjectData(title, description, tasks = []) {
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
