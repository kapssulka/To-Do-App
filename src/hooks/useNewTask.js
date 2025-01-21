import { v4 as uuidv4 } from "uuid";

export default function useNewTask(taskValue, completed = false) {
  const obj = {
    id: uuidv4(),
    text: taskValue,
    completed: completed,
  };
  return obj;
}
