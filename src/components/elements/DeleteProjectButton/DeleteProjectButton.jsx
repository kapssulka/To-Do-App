import React from "react";
import classes from "./DeleteProjectButton.module.scss";
import cn from "classnames";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteProjectMutation } from "../../../redux/projectsAPI";

export default function DeleteProjectButton({
  idProject,
  text = "Delete",
  className,
  size = 24,
}) {
  const [deleteProject] = useDeleteProjectMutation();

  const navigete = useNavigate();

  const handleClick = (e) => {
    if (idProject) {
      deleteProject(idProject).unwrap();
      navigete("/", { replace: true });
    }
  };

  return (
    <button onClick={handleClick} className={cn(classes.button, className)}>
      <span>{text}</span>
      <MdOutlineDelete size={size} />
    </button>
  );
}
