import { Avatar } from "@mui/material";
import React from "react";
import style from "../sass/_headerOption.module.scss";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className={style.headerOption}>
      {Icon && <Icon className={style.headerOption__icon} />}
      {avatar && <Avatar className={style.headerOption__icon} src={avatar} />}
      <h3 className={style.headerOption_title}>{title}</h3>
    </div>
  );
}

export default HeaderOption;
