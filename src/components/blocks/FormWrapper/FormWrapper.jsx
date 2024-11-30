import React from "react";
import classes from "./FormWrapper.module.scss";
import FormNavLink from "../../elements/FormNavLink/FormNavLink";
import Form from "../Form/Form";

export default function FormWrapper() {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.nav}>
        <FormNavLink>Sign Up</FormNavLink>
        <FormNavLink>Sign In</FormNavLink>
      </nav>

      <Form isRegister={true} />
      <Form />
    </div>
  );
}
