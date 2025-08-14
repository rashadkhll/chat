import React from "react";
import "../../utils/grid.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaInbox } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { FaBan } from "react-icons/fa";

import "./Settings.scss"; // Assuming you have a Settings.scss for styling
import { Link } from "react-router";
const Settings = () => {
  return (
    <div className="client__settings">
      <div className="container">
        <h2 className="mb-5">Settings</h2>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Link>
              <div className="settings__card">
                <div className="settings__card__icon">
                  <FaPeopleGroup />
                </div>
                <h3>Manage Your Agents</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  sapiente delectus iste.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12">
            <Link>
              <div className="settings__card">
                <div className="settings__card__icon">
                  <FaInbox />
                </div>
                <h3>Manage Inbox</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  sapiente delectus iste.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12">
            <Link>
              <div className="settings__card">
                <div className="settings__card__icon">
                  <RiTeamFill />
                </div>
                <h3>Manage Your Teams</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  sapiente delectus iste.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12">
            <Link to='manage-widget'>
              <div className="settings__card">
                <div className="settings__card__icon">
                  <FaCode />
                </div>
                <h3>Manage Your Widget</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  sapiente delectus iste.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12">
            <Link>
              <div className="settings__card">
                <div className="settings__card__icon">
                  <FaBan />
                </div>
                <h3>Manage Your Banned Words</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  sapiente delectus iste.
                </p>
              </div>
            </Link>
          </div>
           <div className="col-lg-4 col-md-12">
            <Link>
              <div className="settings__card">
                <div className="settings__card__icon">
                  <FaBan />
                </div>
                <h3>Copy to clipboard</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  sapiente delectus iste.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
