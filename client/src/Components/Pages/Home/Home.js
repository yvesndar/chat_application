import React from "react";
import logo from "../../Images/logo.jpg";
import home from "../../Images/home_page.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav class="nav">
          <a href="/#" className="nav__logo" id="nav-logo">
            <img src={logo} alt="" />
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
        <div class="home__container">
          <div class="home__intro">
            <h1>welcome to my online chat application</h1>
            <p>
              this chat application is a communication app for teams that focus
              on threaded conversations in virtual rooms centered on the project
              od topics.
            </p>
          </div>
          <div class="home__image">
            <img src={home} alt="" />
            <div class="home__buttons">
              <button
                class="home__signup"
                type="button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                sign up
              </button>
              <button
                class="home__login"
                type="button"
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

export default Home;
