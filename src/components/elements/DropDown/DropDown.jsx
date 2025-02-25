import React, { useEffect, useRef, useState } from "react";
import classes from "./DropDown.module.scss";
import cn from "classnames";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import DropDownItemList from "../DropDownItemList/DropDownItemList";
import DeleteProjectButton from "../DeleteProjectButton/DeleteProjectButton";
import { useGetSingleDataQuery } from "../../../redux/projectsAPI";

export default function DropDown({ idProject, className }) {
  const { data } = useGetSingleDataQuery(idProject);

  const currentAllTasks = data ? data[0]?.tasks : [];

  const [activeDrop, setActiveDrop] = useState(false);
  const dropRef = useRef(null);

  const hancdleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setActiveDrop((prev) => !prev);
  };

  const handleDropDownClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const hanleClick = (e) => {
      if (!dropRef.current.contains(e.target)) {
        setActiveDrop(false);
      }
    };

    window.addEventListener("click", hanleClick);

    return () => {
      window.removeEventListener("click", hanleClick);
    };
  }, []);

  return (
    <div className={cn(classes.wrapper, className)}>
      <button onClick={hancdleClick} className={classes.openMenu}>
        <IoEllipsisHorizontalSharp />
      </button>

      <div
        ref={dropRef}
        style={{ display: activeDrop ? "flex" : "none" }}
        className={classes.drop}
        onClick={handleDropDownClick}
      >
        <DropDownItemList
          allTasks={currentAllTasks}
          setActiveDrop={setActiveDrop}
          idProject={idProject}
          status="total"
        />
        <DropDownItemList
          allTasks={currentAllTasks}
          setActiveDrop={setActiveDrop}
          idProject={idProject}
          status="progress"
        />
        <DropDownItemList
          allTasks={currentAllTasks}
          setActiveDrop={setActiveDrop}
          idProject={idProject}
          status="waiting"
        />
        <DropDownItemList
          allTasks={currentAllTasks}
          setActiveDrop={setActiveDrop}
          idProject={idProject}
          status="completed"
        />
        <div className={classes.deleteWrapper}>
          <DeleteProjectButton
            className={classes.delete}
            idProject={idProject}
          />
        </div>
      </div>
    </div>
  );
}
