import React from "react";
import classes from "./UserMenu.module.scss";
import AvatarUser from "../../elements/AvatarUser/AvatarUser";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function UserMenu() {
  return (
    <div className={classes.wrapper}>
      <AvatarUser src="../../../../publick/images/avatar.webp" />

      <div className={classes.name}>Kirill</div>

      <MdKeyboardArrowDown className={classes.arrowDown} size={40} />
    </div>
  );
}
