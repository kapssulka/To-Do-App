import { useEffect, useRef, useState } from "react";
import classes from "./DropDown.module.scss";
import cn from "classnames";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import DropDownItemList from "../DropDownItemList/DropDownItemList";
import DeleteProjectButton from "../DeleteProjectButton/DeleteProjectButton";
import { useGetSingleDataQuery } from "../../../redux/projectsApi";
import { IdProject } from "../../../types/data";
import * as React from "react";

interface IProps {
  idProject: IdProject;
  className?: string;
}

export default function DropDown({ idProject, className }: IProps) {
  const { data } = useGetSingleDataQuery(idProject);

  const currentAllTasks = data ? data[0]?.tasks : [];

  const [activeDrop, setActiveDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null);

  const hancdleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setActiveDrop((prev) => !prev);
  };

  const handleDropDownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setActiveDrop(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
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
