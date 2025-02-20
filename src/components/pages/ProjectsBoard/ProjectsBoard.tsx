import classes from "./ProjectsBoard.module.scss";
import Projects from "../../blocks/Projects/Projects";
import AsideProjects from "../../blocks/AsideProjects/AsideProjects";
import { useGetDataQuery } from "../../../redux/projectsApi";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";
import { IProjectData } from "../../../types/data";

export default function TasksBoard() {
  const [userId, setUserId] = useState<null | string>(null);

  const { data } = useGetDataQuery([userId], {
    skip: !userId,
  });

  useEffect(() => {
    const { currentUser } = auth;
    if (currentUser) setUserId(currentUser.uid);
    else setUserId(null);
  }, []);

  return (
    <section className={classes.wrapper}>
      <Projects data={data} />
      <AsideProjects data={data} />
    </section>
  );
}
