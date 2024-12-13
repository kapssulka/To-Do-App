import { v4 as uuidv4 } from "uuid";

export default function useFormProjectData(title, description, tasks = []) {
  const obj = {
    id: uuidv4(),
    title: title,
    description: description,
    complited: "total",
    tasks: tasks,
  };
  return obj;
}
