import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsChatSquare } from "react-icons/bs";

import "./Inbox.scss"; // Assuming you have an Inbox.scss for styling
const Inbox = () => {
  return (
    <div className="client__inbox">
      <div className="client__inbox__chats">
        <h2>
          Chats <BsChatSquare />
        </h2>
        <ul>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
              <div className="online__indicator"></div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="client__inbox__chats__chat">
              <div className="client__inbox__chats__chat__content">
                <img
                  src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                  alt="User Avatar"
                  className="client__inbox__chats__chat__content__avatar"
                />
                <div className="client__inbox__chats__chat__content__info">
                  <h3>John Doe</h3>
                  <p>Last message...</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="client__inbox__message">
        <div className="client__inbox__message__header">
          <div className="client__inbox__message__header__avatar">
            <img
              src="https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
              alt=""
            />
            <div className="client__inbox__message__header__info">
              <h2 className="client__inbox__message__header__info__name">
                John Doe
              </h2>
              <span className="client__inbox__message__header__info__status">
                typing...
              </span>
            </div>
          </div>
          <div className="client__inbox__message__header__actions">
            <button className="client__inbox__message__header__actions__menu">
              <GiHamburgerMenu />
            </button>
            {/* <button className="client__inbox__message__header__actions__call">
              Call
            </button>
            <button className="client__inbox__message__header__actions__video">
              Video
            </button> */}
          </div>
        </div>
        <div className="client__inbox__message__body">
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>
          <div className="client__inbox__message__body__message client__inbox__message__body__message__received">
            <div className="client__inbox__message__body__message__content">
              <p>I'm good, thanks! And you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:01 AM
            </span>
          </div>
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>{" "}
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>{" "}
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>{" "}
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>{" "}
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>{" "}
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>{" "}
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>{" "}
          <div className="client__inbox__message__body__message client__inbox__message__body__message__received">
            <div className="client__inbox__message__body__message__content">
              <img
                src="https://www.in2code.de/fileadmin/_processed_/0/b/csm_code_javascript_49d002a67e.webp"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                tenetur!
              </p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:01 AM
            </span>
          </div>
          <div className="client__inbox__message__body__message client__inbox__message__body__message__sent">
            <div className="client__inbox__message__body__message__content">
              <p>Hello, how are you?</p>
            </div>
            <span className="client__inbox__message__body__message__time">
              10:00 AM
            </span>
          </div>
          <div className="client__inbox__message__body__form">
            <input
              type="text"
              placeholder="Type a message..."
              className="client__inbox__message__body__form__input"
            />
            <button className="client__inbox__message__form__send">
              Send <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
