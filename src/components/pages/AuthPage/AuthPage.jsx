import React from "react";
import classes from "./AuthPage.module.scss";
import FormNavLink from "../../elements/FormNavLink/FormNavLink";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <img src="../../../../publick/images/authPage.png" alt="" />

        <p className={classes.copy}>© 2024. Все права защищены.</p>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapperForm}>
          <nav className={classes.nav}>
            <FormNavLink to="/welcome/register">Sign Up</FormNavLink>
            <FormNavLink to="/welcome/login">Sign In</FormNavLink>
          </nav>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
