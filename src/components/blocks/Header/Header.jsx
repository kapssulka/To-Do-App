import React from "react";
import classes from "./Header.module.scss";

import { RxHamburgerMenu } from "react-icons/rx";
import InputSearch from "../../elements/InputSearch/InputSearch";
import UserMenu from "../UserMenu/UserMenu";
import IconHoverWrapper from "../../elements/IconHoverWrapper/IconHoverWrapper";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <IconHoverWrapper>
          <RxHamburgerMenu size={30} />
        </IconHoverWrapper>

        <InputSearch placeholder="Enter projects or tasks" />
      </div>

      <UserMenu />
    </header>
  );
}
