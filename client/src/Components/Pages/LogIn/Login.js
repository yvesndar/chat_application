import React from "react";
import logo from "../../Images/logo.jpg";
import login from "../../Images/login.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

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
                console.log("clicked");
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
        <div class="log-container">
          <div class="login-image">
            <img src={login} alt="" />
          </div>
          <div class="login-form">
            <h1 class="title">Log in</h1>
            <form action="">
              <input
                class="input username"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <input
                class="input password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </form>
            <div class="buttons">
              <button
                class="register-button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
              <button
                class="login-button"
                onClick={() => {
                  navigate("/inbox");
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

export default Login;
