import React from "react";
import "./HelpCenter.scss";
import { FaSearch } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";

const HelpCenter = () => {
  return (
    <div className="help__center container">
      <h1 className="help__center__header">
        Hey 👋, Welcome to our Help Center.
      </h1>
      <p className="help__center__text">
        If you have questions, are confused, or just want to understand <br />{" "}
        our product better – we've got your back.
      </p>
      <p>You can type in your query below.</p>
      <div className="help__center__search">
        <FaSearch />
        <input type="text" placeholder="search" />
      </div>
      <p>Or browse through the categories below.</p>
      <div className="help__center__cards row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="help__center__card">
            <FaBarsProgress />
            <h3>Self Hosted Chatwoot</h3>
            <p>How to setup and run self-hosted instance of Chatwoot</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="help__center__card">
            <FaBarsProgress />
            <h3>Self Hosted Chatwoot</h3>
            <p>How to setup and run self-hosted instance of Chatwoot</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="help__center__card">
            <FaBarsProgress />
            <h3>Self Hosted Chatwoot</h3>
            <p>How to setup and run self-hosted instance of Chatwoot</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="help__center__card">
            <FaBarsProgress />
            <h3>Self Hosted Chatwoot</h3>
            <p>How to setup and run self-hosted instance of Chatwoot</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="help__center__card">
            <FaBarsProgress />
            <h3>Self Hosted Chatwoot</h3>
            <p>How to setup and run self-hosted instance of Chatwoot</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="help__center__card">
            <FaBarsProgress />
            <h3>Self Hosted Chatwoot</h3>
            <p>How to setup and run self-hosted instance of Chatwoot</p>
          </div>
        </div>
      </div>
      <div className="help__center__faq">
        <h2>Frequently asked questions</h2>
        <ul>
          <li>
            <Link>
              How do I automate conversations with chatbots?
              <FaExternalLinkAlt />
            </Link>
          </li>
          <li>
            <Link>
              Can I customise Chatwoot branding?
              <FaExternalLinkAlt />
            </Link>
          </li>
          <li>
            <Link>
              How can I extend Chatwoot for back-office operations?
              <FaExternalLinkAlt />
            </Link>
          </li>
          <li>
            <Link>
              How can I integrate Chatwoot with Dialogflow?
              <FaExternalLinkAlt />
            </Link>
          </li>
          <li>
            <Link>
              How can I configure IMAP in an Email channel?{" "}
              <FaExternalLinkAlt />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpCenter;
