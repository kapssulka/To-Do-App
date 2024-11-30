import classes from "./FormNavLink.module.scss";
import { NavLink } from "react-router-dom";

export default function FormNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.linkActive : ""}`
      }
    >
      {children}
    </NavLink>
  );
}
