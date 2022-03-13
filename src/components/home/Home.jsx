import React from "react";

import { BsGithub, BsFacebook } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import "./Home.scss";

import logo from "../../assets/logo.png";
import person from "../../assets/main-pic.png";
import CV from "../../assets/cv.txt";

function Home() {
  return (
    <header id="home">
      <div className="header">
        <img src={logo} alt="logo" />
        <ul className="social-media-links">
          <li>
            <BsGithub className="icon" size={20} />
          </li>
          <li>
            <BsFacebook className="icon" size={20} />
          </li>
          <li>
            <MdMail className="icon" size={20} />
          </li>
        </ul>
      </div>
      <div className="intro">
        <h1>
          Hello, I am{" "}
          <span className="bigger">Veronika - Front-End Developer</span>
        </h1>
        <div className="btn-container">
          <a href="#contact">
            <button type="button" className="btn btn-primary">
              Contact Me
            </button>
          </a>
          <a href={CV} download="Veronika_CV">
            <button type="button" className="btn btn-secondary">
              Download CV
            </button>
          </a>
        </div>
        <img src={person} alt="person in nature" />
      </div>
    </header>
  );
}

export default Home;