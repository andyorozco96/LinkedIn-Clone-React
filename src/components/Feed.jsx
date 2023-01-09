import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";

import style from "../sass/_feed.module.scss";
import Post from "./Post";
import { colPostsRef } from "../firebase";
import {
  serverTimestamp,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const userLogged = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const q = query(colPostsRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q, query(orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(colPostsRef, {
      name: userLogged.displayName,
      description: userLogged.email,
      message: input,
      photoUrl: userLogged.photoUrl,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className={style.feed}>
      <div className={style.feed__inputContainer}>
        <div className={style.feed__input}>
          <CreateIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className={style.feed__inputOptions}>
          {/* Input options here*/}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Here comes posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
