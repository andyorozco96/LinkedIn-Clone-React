import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";

import style from "../sass/_header.module.scss";
function Header() {
  /* El header tiene sección izq y derecha */
  return (
    <div className={style.header}>
      {/* LEFT SIDE OF THE HEADER */}
      <div className={style.header__left}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="LinkedIn logo"
        />

        <div className={style.header__search}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* RIGHT SIDE OF THE HEADER */}
      <div className={style.header__right}>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i.ibb.co/9wwHdkZ/EDITED-6193-removebg-preview.png"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
