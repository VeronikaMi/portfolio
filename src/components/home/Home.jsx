import React,{useEffect} from "react";

import { BsGithub, BsFacebook } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import "./Home.scss";

import logo from "../../assets/logo.png";
import person from "../../assets/main-pic.png";
import CV from "../../assets/cv.txt";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
      AOS.init({duration :1500});
    }, []);

  return (
    <header id="home">
      <div className="header">
        <img src={logo} alt="logo" />
        <ul className="social-media-links">
        <li>
            <a href="https://github.com/VeronikaMi">
              <BsGithub className="icon" size={30} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <BsFacebook className="icon" size={30} />
            </a>
          </li>
          <li>
            <a href="mailto:nika.mitichashili@gmail.com">
              <MdMail className="icon" size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="intro">
        <h1 data-aos="fade-down">
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
