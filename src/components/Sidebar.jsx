import { Avatar } from "@mui/material";
import React from "react";

import style from "../sass/_sidebar.module.scss";

function Sidebar() {
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
          src="https://media.licdn.com/dms/image/D4E16AQFpRMTINhsb7Q/profile-displaybackgroundimage-shrink_350_1400/0/1667427236938?e=1678320000&v=beta&t=T9TAqenYE8_HEnz3nv8aLmcS8OGx6DtIbgFuIl_GyAU"
          alt=""
        />
        <Avatar
          className={style.sidebar__avatar}
          src="https://i.ibb.co/9wwHdkZ/EDITED-6193-removebg-preview.png"
          alt="Profile picture"
        />
        <h2>Andrés Orozco</h2>
        <h4>orozco.andres.dev@gmail.com</h4>
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
