import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

import style from "../sass/_sidebar.module.scss";

function Sidebar() {
  const userLogged = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className={style.sidebar__recentItem}>
      <span className={style.sidebar__hash}>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className={style.sidebar}>
      {/* THIS IS THE TOP SIDEBAR */}
      <div className={style.sidebar__top}>
        <img
          src="https://career-lunch-storage.s3.eu-central-1.amazonaws.com/v2/blog/articles/linkedin-title-picture.jpg"
          alt="Cover default LinkedIn"
        />
        <Avatar
          className={style.sidebar__avatar}
          src={
            userLogged.photoUrl ? userLogged.photoUrl : "hola"
            // : userLogged.email[0].topUpperCase()
          }
          alt="Profile picture"
        >
          {userLogged.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{userLogged.displayName}</h2>
        <h4>{userLogged.email}</h4>
      </div>

      <div className={style.sidebar__stats}>
        <div className={style.sidebar__stat}>
          <p>Who viewed you</p>
          <p className={style.sidebar__statNumber}>254</p>
        </div>
        <div className={style.sidebar__stat}>
          <p>Views on post</p>
          <p className={style.sidebar__statNumber}>2,582</p>
        </div>
      </div>

      {/* THIS IS THE BOTOTM SIDEBAR */}
      <div className={style.sidebar__bottom}>
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("desing")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
