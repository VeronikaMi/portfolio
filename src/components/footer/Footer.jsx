import React from "react";
import "./Footer.scss";

import {
  BsGithub,
  BsArrowUpSquare,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { MdMail } from "react-icons/md";

function Footer() {
  const scrollUp = () => {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0;

    console.log("Scroll top");
  };
  return (
    <footer>
      <div className="links">
        <ul className="footer-links">
          <li>
            <a href="#home">About Me</a>
          </li>
          <li>
            <a href="#experience">My Experience</a>
          </li>
          <li>
            <a href="#portfolio">My Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <ul className="contact-links">
          <li>
            <a
              href="https://github.com/VeronikaMi"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icon" size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/veronika-mitichashvili-0b8193292"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon" size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/nika_veronikami"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="icon" size={30} />
            </a>
          </li>
          <li>
            <a
              href="mailto:nika.mitichashili@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdMail className="icon" size={30} />
            </a>
          </li>
        </ul>
        <BsArrowUpSquare size={30} className="arrow" onClick={scrollUp} />
        <p>©Veronika Mitichashvili 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
