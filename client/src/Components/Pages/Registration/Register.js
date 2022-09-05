import React, { useState } from "react";
import logo from "../../Images/logo.jpg";
import reg from "../../Images/registration.png";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const id =
  year + "" + month + "" + day + "" + hours + "" + minute + "" + second;
console.log(id);

function Register() {
  const navigate = useNavigate();

  const [namesReg, setNamesReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");

  const register = () => {
    if (passwordReg !== confirmPasswordReg) {
      alert("enter the same password");
    } else {
      Axios.post("http://localhost:3308/register", {
        id: id,
        names: namesReg,
        username: usernameReg,
        email: emailReg,
        password: passwordReg,
        confirmPassword: confirmPasswordReg,
      }).then((Response) => {
        console.log(Response);
      });
      navigate("/chat");
    }
  };

  return (
    <div>
      <header>
        <nav class="nav">
          <a href="/" class="nav__logo" id="nav-logo">
            <img
              src={logo}
              alt=""
              onClick={() => {
                navigate("/");
              }}
            />
            <span>Chat Application</span>
          </a>
          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item" id="nav-item">
                <a href="/#" class="nav__link" id="home">
                  home
                </a>
              </li>
              <li class="nav__item" id="nav-item">
                <a href="/#" class="nav__link" id="home">
                  about app
                </a>
              </li>
              <li class="nav__item" id="nav-item">
                <a href="/#" class="nav__link" id="home">
                  How to use
                </a>
              </li>
              <li class="nav__item" id="nav-item">
                <a href="/#" class="nav__link" id="log-in">
                  log in
                </a>
              </li>
              <li class="nav__item" id="nav-item">
                <a href="/#" class="nav__link" id="sign-up">
                  sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div class="reg-container">
          <div class="registration-image">
            <img src={reg} alt="" />
          </div>
          <div class="registration-form">
            <h1 class="title">create an account</h1>
            <p class="description">
              create your account, it takes less than a minute. if you already
              have an account please log in.
            </p>
            <form action="">
              <input
                type="text"
                name="names"
                id="names"
                placeholder="Full Name"
                onChange={(event) => {
                  setNamesReg(event.target.value);
                }}
              />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={(event) => {
                  setUsernameReg(event.target.value);
                }}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmailReg(event.target.value);
                }}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {
                  setPasswordReg(event.target.value);
                }}
              />
              <input
                type="password"
                name="repassword"
                id="repassword"
                placeholder="Repeat Password"
                onChange={(event) => {
                  setConfirmPasswordReg(event.target.value);
                }}
              />
            </form>
            <div class="buttons">
              <button class="register-button" onClick={register}>
                Register
              </button>
              <button
                class="login-button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                log in
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
