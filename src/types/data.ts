// status
export type IStatus = "total" | "progress" | "completed" | "waiting";

// Project Tasks

export type IdProject = string;

interface ITasks {
  id: IdProject;
  text: string;
  completed: boolean;
}

export type Tasks = ITasks[];
