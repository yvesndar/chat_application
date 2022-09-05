import React from "react";
import "./Inbox.css";

function Inbox() {
  return (
    <div className="inbox-container">
      <div className="chat__list">
        <div className="contact__list">
          <h1>Chat</h1>
          <ul className="contact__menu">
            <li className="contact__item">User1</li>
            <li className="contact__item">User1</li>
            <li className="contact__item">User1</li>
            <li className="contact__item">User1</li>
          </ul>
        </div>
        <div className="buttons">
          <button className="newchat">new chat</button>
        </div>
      </div>

      <div className="message__container">
        <div className="message__header">
          <div className="message__header-user">
            <span className="user"> User 1</span>
          </div>
          <div className="message__header-option">
            <i className="bx bx-search"></i>
            <i className="bx bx-phone-call"></i>
            <i className="bx bx-video"></i>
            <i className="bx bx-info-circle"></i>
            <i className="bx bx-dots-vertical-rounded"></i>
          </div>
        </div>
        <div className="message__main">
          <div className="message__content-received">
            <div className="message__text">
              <p className="message__received">
                Dark blue as a color can be often confused with Navy Blue, as
                they are closely related. Dark blue as a color can be often
                confused with Navy Blue, as they are closely related.Dark blue
                as a color can be often confused with Navy Blue, as they are
                closely related.
              </p>
            </div>
          </div>
          <div className="message__content-sent">
            <div className="message__text">
              <p className="message__sent">
                Yet, the cool, deep shade of dark blue is unique enough to stand
                on its own. Yet, the cool, deep shade of dark blue is unique
                enough to stand on its own.
              </p>
            </div>
          </div>
        </div>
        <div className="message__footer">
          <input
            className="type__message"
            type="text"
            name="message"
            placeholder="Type your message..."
          />
          <i className="bx bx-up-arrow-alt"></i>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
