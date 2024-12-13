import React, { useEffect, useRef, useState } from "react";
import classes from "./DropDown.module.scss";
import cn from "classnames";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import DropDownItemList from "../DropDownItemList/DropDownItemList";
import DeleteProjectButton from "../DeleteProjectButton/DeleteProjectButton";

export default function DropDown({ id }) {
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
    <div className={classes.wrapper}>
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
          setActiveDrop={setActiveDrop}
          id={id}
          status="total"
        />
        <DropDownItemList
          setActiveDrop={setActiveDrop}
          id={id}
          status="progress"
        />
        <DropDownItemList
          setActiveDrop={setActiveDrop}
          id={id}
          status="waiting"
        />
        <DropDownItemList
          setActiveDrop={setActiveDrop}
          id={id}
          status="complited"
        />
        <div className={classes.deleteWrapper}>
          <DeleteProjectButton className={classes.delete} id={id} />
        </div>
      </div>
    </div>
  );
}
