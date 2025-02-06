import React from "react";
import classes from "./Aside.module.scss";
import { HiHome } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";
import { logOutUser } from "../../../helpers/HelpersFirebase";

export default function Aside() {
  const handleLogOut = () => logOutUser();

  return (
    <aside className={classes.aside}>
      <Logo />
      <div className={classes.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          <HiHome className={classes.linkIcon} size={40} />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          <CgProfile className={classes.linkIcon} size={40} />
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          <IoIosCheckmarkCircle className={classes.linkIcon} size={40} />
        </NavLink>
      </div>

      <button onClick={handleLogOut} className={classes.logout}>
        <MdLogout className={classes.linkIcon} size={40} />
      </button>
    </aside>
  );
}
