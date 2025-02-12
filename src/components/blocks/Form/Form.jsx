import React, { useState } from "react";
import classes from "./Form.module.scss";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import {
  createUserWithFirebase,
  singInWithFirebase,
} from "../../../helpers/HelpersFirebase";
import { useNavigate } from "react-router-dom";

export default function Form({ isRegister = false }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (isRegister && email && password.length >= 6) {
      await createUserWithFirebase(email, password, name);

      setEmail("");
      setPassword("");
      navigate("/");
    }

    if (!isRegister && email && password.length >= 6) {
      console.log("Вход");

      await singInWithFirebase(email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <form className={classes.form}>
      {/* {isRegister && (
        <Input
          placeholder="Enter your user name"
          label="User Name"
          type="text"
          onChange={setName}
          valueInput={name}
        />
      )} */}
      <Input
        placeholder="Enter your email"
        label="Email"
        type="email"
        onChange={setEmail}
        valueInput={email}
      />
      <Input
        onChange={setPassword}
        valueInput={password}
        placeholder="Enter your password"
        label="Password"
      />

      <Button onClick={handleClick} className={classes.button}>
        Sign In
      </Button>
    </form>
  );
}
