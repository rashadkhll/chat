import React from "react";
import "./Sidebar.scss";
import { FaMessage } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";

import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
const Sidebar = () => {
  const handleDarkModeToggle = () => {
    document.body.classList.toggle("dark-mode");
  };
  return (
    <div className="client__sidebar">
      <div className="client__sidebar__top">
        <Link>
          <IoIosChatbubbles />
          Live Chat
        </Link>
        <div className="client__sidebar__top__search">
          <input type="text" placeholder="search..." />
          <button>submit</button>
        </div>
      </div>
      <div className="client__sidebar__middle">
        <ul>
          <li>
            <Link to="">
              <FaMessage />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <IoPersonSharp />
              <span>Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <IoPeopleSharp />
              <span>Groups</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <IoIosSettings />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="client__sidebar__bottom">
        <Link className="client__sidebar__bottom__avatar">
          <img
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </Link>
        <button
          onClick={() => {
            handleDarkModeToggle();
          }}
          className="client__sidebar__bottom__dark__mode__btn"
        >
          <FaMoon />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
