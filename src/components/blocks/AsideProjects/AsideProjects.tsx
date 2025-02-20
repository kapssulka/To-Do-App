import classes from "./AsideProjects.module.scss";
import ProjectsCountInfo from "../../elements/ProjectsCountInfo/ProjectsCountInfo";
import CircleProgressBar from "../../elements/CircleProgressBar/CircleProgressBar";
import { getProjectsByStatus } from "../../../helpers/utils";
import { IProjectData } from "../../../types/data";

export default function AsideProjects({ data = [] }: { data: IProjectData[] }) {
  const waitingProject: IProjectData[] = getProjectsByStatus(data, "waiting");
  const progressProject: IProjectData[] = getProjectsByStatus(data, "progress");
  const complitedProject: IProjectData[] = getProjectsByStatus(
    data,
    "completed"
  );

  const percentageСompletedProjects: number =
    Math.floor((complitedProject.length * 100) / data?.length) || 0;

  return (
    <aside className={classes.aside}>
      <h3 className={classes.title}>Projects info</h3>
      <CircleProgressBar value={percentageСompletedProjects} />
      {/* progress bar */}

      <div className={classes.projectsStatus}>
        <h4>Projects status</h4>

        <div className={classes.projectsStatus__grid}>
          <ProjectsCountInfo count={data?.length} />
          <ProjectsCountInfo
            count={complitedProject.length}
            title="completed"
            status="completed"
          />
          <ProjectsCountInfo
            count={progressProject.length}
            title="in progress"
            status="progress"
          />
          <ProjectsCountInfo
            count={waitingProject.length}
            title="waiting"
            status="waiting"
          />
        </div>
      </div>
      {/* projects */}
    </aside>
  );
}
