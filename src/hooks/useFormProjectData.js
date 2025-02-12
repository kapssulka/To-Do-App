import { v4 as uuidv4 } from "uuid";
import { auth } from "../firebase";

export default function useFormProjectData(title, description, tasks = []) {
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
