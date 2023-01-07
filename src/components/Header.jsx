import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import style from "../sass/_header.module.scss";
function Header() {
  /* El header tiene sección izq y derecha */
  return (
    <div className={style.header}>
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

      <div className={style.header_right}></div>
    </div>
  );
}

export default Header;
