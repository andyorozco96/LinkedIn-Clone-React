import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import style from "../sass/_headerOption.module.scss";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const userLogged = useSelector(selectUser);
  return (
    <div onClick={onClick} className={style.headerOption}>
      {Icon && <Icon className={style.headerOption__icon} />}
      {avatar && (
        <Avatar
          className={style.headerOption__icon}
          src={userLogged && userLogged.photoUrl}
        >
          {/* {userLogged?.email[0].toUpperCase()} */}
        </Avatar>
      )}
      <h3 className={style.headerOption_title}>{title}</h3>
    </div>
  );
}

export default HeaderOption;
