import React from "react";
import "./Footer.scss";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container app__footer">
      <div className="app__footer__top row">
        <div className="col-lg-6 col-md-12 app__footer__top__left">
          <Link to="/">
            <h1>
              <CiChat1 />
              Live Chat
            </h1>
          </Link>
          <p>
            The modern, open source, self-hosted customer support platform.{" "}
            <br /> An alternative to Intercom and Zendesk.
          </p>
          <ul>
            <li>
              <Link to="/">
                <FaGithub />
              </Link>
              <Link to="/">
                <FaDiscord />
              </Link>
              <Link to="/">
                <FaLinkedin />
              </Link>
              <Link to="/">
                <FaYoutube />
              </Link>
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
          </ul>
          <div className="app__footer__backed">
            <p>Backed By</p>
            <img
              src="https://www.chatwoot.com/images/home/investors/yc.png"
              alt=""
            />
            <img
              src="https://www.chatwoot.com/images/home/investors/goat-capital.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <h3>Product</h3>
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Integrations</Link>
            </li>
            <li>
              <Link to="/resources">Mobile Apps</Link>
            </li>
            <li>
              <Link to="/resources">Changelog</Link>
            </li>
            <li>
              <Link to="/resources">User guide</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/features">Team</Link>
            </li>
            <li>
              <Link to="/pricing">Careers</Link>
            </li>
            <li>
              <Link to="/resources">Blog</Link>
            </li>
            <li>
              <Link to="/resources">Handbook</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/features">Self Hosted Chatwoot</Link>
            </li>
            <li>
              <Link to="/pricing">Product Documentation</Link>
            </li>
            <li>
              <Link to="/resources">API Documentation</Link>
            </li>
            <li>
              <Link to="/resources">Contribution guide</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="app__footer__bottom">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p>© 2023 Chatwoot Inc. All rights reserved.</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
