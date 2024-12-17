import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../../redux/projectsSlise";

export const SingleProjectContext = createContext();

export default function SingleProjectContextProvider({ children }) {
  const { id } = useParams();
  const currentProjectData = useSelector((state) => state.projects.singleData);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getSingleData(id));
  }, [dispath]);

  const value = {
    idProject: id,
    title: currentProjectData.title,
    projectTasks: currentProjectData?.tasks,
    statusProject: currentProjectData.status,
    coutTasks: currentProjectData?.tasks?.length,
    description: currentProjectData.description,
  };

  return (
    <SingleProjectContext.Provider value={value}>
      {children}
    </SingleProjectContext.Provider>
  );
}
