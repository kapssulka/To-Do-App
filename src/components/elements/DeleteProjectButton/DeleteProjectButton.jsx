import React from "react";
import classes from "./DeleteProjectButton.module.scss";
import cn from "classnames";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../redux/projectsSlise";
import { useNavigate } from "react-router-dom";

export default function DeleteProjectButton({
  id,
  text = "Delete",
  className,
  size = 24,
}) {
  const dispatch = useDispatch();
  const navigete = useNavigate();

  const handleClick = (e) => {
    if (id) {
      dispatch(deleteProject(id));
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
