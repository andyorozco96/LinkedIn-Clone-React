import {
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";

import style from "../sass/_login.module.scss";

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .then(() => {
        setFormData({
          name: "",
          photoUrl: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => alert(err));
  };

  const register = () => {
    if (!formData.name) {
      return alert("Please enter a full name");
    }
    if (!formData.email) {
      return alert("Please enter a valid email");
    }
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: formData.name,
          photoURL: formData.photoUrl,
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: formData.name,
                photoUrl: formData.photoUrl,
              })
            );
          })
          .then(() => {
            setFormData({
              name: "",
              photoUrl: "",
              email: "",
              password: "",
            });
          });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className={style.login}>
      <div className={style.login__container}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
          alt="LinkedIn logo"
        />

        <form>
          <input
            type="text"
            placeholder="Full name (required if registering)"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Profile pic URL (optional)"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" onClick={loginToApp}>
            Sign in
          </button>
        </form>

        <p>
          Not a member?{" "}
          <span onClick={register} className={style.login__register}>
            Register Now!
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
