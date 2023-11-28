import React, { useEffect } from "react";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import "./Home.scss";

import logo from "../../assets/logo.png";
import person from "../../assets/first-pic.jpg";
import CV from "../../assets/CV.pdf";

import AOS from "aos";
import "aos/dist/aos.css";

// data-aos="fade-down"

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header id="home">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <ul className="social-media-links">
          <li>
            <a
              href="https://github.com/VeronikaMi"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icon" size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/veronika-mitichashvili-0b8193292"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon" size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/nika_veronikami"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="icon" size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:nika.mitichashili@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdMail className="icon" size={20} />
            </a>
          </li>
        </ul>
      </div>
      {/* data-aos="fade-down" */}
      <div className="intro">
        <div className="text">
          <h1>Front-End Developer</h1>
          <p>
            Hello, everyone. My name is{" "}
            <span className="different-color">Veronika</span>. I’m a
            hard-working web developer based in Georgia. If you need any help
            with your website I'd be happy to help
          </p>
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
        </div>
        <div className="pic">
          <img src={person} alt="main pic" />
        </div>
      </div>
    </header>
  );
}

export default Home;
