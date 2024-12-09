import React from "react";
import classes from "./Home.module.scss";
import Header from "../../blocks/Header/Header";
import Aside from "../../blocks/Aside/Aside";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <Aside />
      <div className={classes.content}>
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
