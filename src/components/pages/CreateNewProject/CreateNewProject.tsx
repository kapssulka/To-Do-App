import { useState } from "react";
import classes from "./CreateNewProject.module.scss";
import Title from "../../elements/Title/Title";
import AddNewForm from "../../blocks/AddNewForm/AddNewForm";
import BackToLink from "../../elements/BackToLink/BackToLink";
import SuccessBlock from "../../blocks/SuccessBlock/SuccessBlock";

export default function CreateNewProject() {
  const [addedProject, setAddedProject] = useState<boolean>(false);

  const setAdded = () => setAddedProject((prev) => !prev);

  return (
    <section className={classes.wrapper}>
      {!addedProject && (
        <>
          <div className={classes.header}>
            <BackToLink to="/" />
            <Title className={classes.title} variant="h1">
              Create new project
            </Title>
          </div>
          <AddNewForm setAdded={setAdded} />
        </>
      )}
      {addedProject && <SuccessBlock setAdded={setAdded} />}
    </section>
  );
}
