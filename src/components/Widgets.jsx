import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import style from "../sass/_widgets.module.scss";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className={style.widgets__article}>
      <div className={style.widgets__articleLeft}>
        <FiberManualRecordIcon fontSize="small" />
      </div>
      <div className={style.widgets__articleRight}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className={style.widgets}>
      <div className={style.widgets__header}>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("REACT + REDUX is back!", "Top news - 9099 readers")}
      {newsArticle(
        "Data Science vs Software Engineering: Do You Know the Difference?",
        "Analytics Insight"
      )}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 800 readers")}
      {newsArticle("Is redux too good?", "Code - 123 readers")}
    </div>
  );
}

export default Widgets;
