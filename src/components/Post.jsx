import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";

import style from "../sass/_post.module.scss";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className={style.post}>
      <div className={style.post__header}>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className={style.post__info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className={style.post__body}>
        <p>{message}</p>
      </div>

      <div className={style.post__buttons}>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" gray="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" gray="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" gray="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" gray="gray" />
      </div>
    </div>
  );
});

export default Post;
