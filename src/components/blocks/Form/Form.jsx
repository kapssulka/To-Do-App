import React from "react";
import classes from "./Form.module.scss";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";

export default function Form({ isRegister = false }) {
  return (
    <form className={classes.form}>
      {isRegister && (
        <Input
          placeholder="Enter your user name"
          label="User Name"
          type="text"
        />
      )}
      <Input placeholder="Enter your email" label="Email" type="email" />
      <Input placeholder="Enter your password" label="Password" />

      <Button>Sign In</Button>
    </form>
  );
}
