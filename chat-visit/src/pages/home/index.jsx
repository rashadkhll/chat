import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { FaBoltLightning } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { SiChatwoot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Slider from "react-slick";
const Home = () => {
  return (
    <div className="home">
      <section className="home__intro container">
        <Link to="/" className="home__intro__link">
          <FaBoltLightning />
          Introducing Captain, our AI agent
          <FaChevronRight />
        </Link>
        <h1 className="home__intro__header">
          The modern customer support tool for <br /> your business
        </h1>
        <p className="home__intro__text">
          AI assistant, omnichannel support desk, knowledge base. Everything you
          need for seamless customer support, all in one place.
        </p>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 home__intro__buttons">
            <button className="home__intro__button" id="free-trial">
              Start your free trial
            </button>
            <button className="home__intro__button" id="request-demo">
              Request a demo
            </button>
          </div>
          <div className="col-lg-6 col-md-12 home__intro__footer__links">
            <Link to="">
              <SiChatwoot />
              4.5+ rating
            </Link>
            <Link to="">
              <FaGithub />
              24k stars
            </Link>
          </div>
        </div>
      </section>
      <section className="agent__dashboard container">
        <img src="https://www.chatwoot.com/images/dashboard-dark.webp" alt="" />
        <p>Trusted by 15,000+ businesses</p>
        <div className="slider-container"></div>
      </section>
    </div>
  );
};

export default Home;
