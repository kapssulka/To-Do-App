// status
export type Status = "total" | "progress" | "completed" | "waiting";

// Project Tasks

export type IdProject = string;

interface ITasks {
  id: IdProject;
  text: string;
  completed: boolean;
}

export type Tasks = ITasks[];

export interface IProjectData {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: Status;
  tasks: ITasks[];
}
