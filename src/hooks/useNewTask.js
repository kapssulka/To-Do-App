import { v4 as uuidv4 } from "uuid";

export default function useNewTask(taskValue) {
  const obj = {
    id: uuidv4(),
    text: taskValue,
    completed: false,
  };
  return obj;
}
