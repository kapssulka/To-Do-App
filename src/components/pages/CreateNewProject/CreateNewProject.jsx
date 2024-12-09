import React from "react";
import classes from "./CreateNewProject.module.scss";
import Title from "../../elements/Title/Title";
import AddNewForm from "../../blocks/AddNewForm/AddNewForm";
import BackToLink from "../../elements/BackToLink/BackToLink";

export default function CreateNewProject() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <BackToLink to="/" />
        <Title className={classes.title} vatiant="h1">
          Create new project
        </Title>
      </div>
      <AddNewForm />
    </section>
  );
}
