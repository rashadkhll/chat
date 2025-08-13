import React, { useState } from "react";
import "./Sidebar.scss";
import { FaMessage } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
const Sidebar = () => {
  const path = window.location.pathname.split("/")[2];
  const [activePath, setActivePath] = useState(path);
  const [darkMode, setDarkMode] = useState(false);
  const links = [
    { to: "inbox", icon: <FaMessage />, label: "My Inbox" },
    { to: "conversations", icon: <IoIosChatbubbles />, label: "Conversations" },
    { to: "contacts", icon: <IoPersonSharp />, label: "Contacts" },
    { to: "groups", icon: <IoPeopleSharp />, label: "Groups" },
    { to: "help-center", icon: <IoLibrary />, label: "Help Center" },
    { to: "reports", icon: <TbReportSearch />, label: "Reports" },
    { to: "settings", icon: <IoIosSettings />, label: "Settings" },
  ];
  const handleActiveTab = (e) => {
    const activeLink = document.querySelector(".active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
  const handleDarkModeToggle = (e) => {
    document.body.classList.toggle("dark-mode");
    setDarkMode((prev) => !prev);
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
          {links.map((link) => (
            <li
              key={link.to}
              onClick={handleActiveTab}
              className={activePath === link.to ? "active" : ""}
            >
              <Link to={link.to}>
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="client__sidebar__bottom">
        <Link to="profile" className="client__sidebar__bottom__avatar">
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
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
