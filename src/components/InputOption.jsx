import React from "react";

import style from "../sass/_inputOption.module.scss";

function InputOption({ title, Icon, color }) {
  return (
    <div className={style.inputOption}>
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
