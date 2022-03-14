import React from "react";
import "./Footer.scss";

import { BsGithub, BsFacebook, BsArrowUpSquare } from "react-icons/bs";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div className="links">
        <ul className="footer-links">
          <li>
            <a href="home">About Me</a>
          </li>
          <li>
            <a href="">My Experience</a>
          </li>
          <li>
            <a href="">My Portfolio</a>
          </li>
          <li>
            <a href="">Contact Me</a>
          </li>
        </ul>
        <ul className="contact-links">
          <li>
            <a href="#">
              <BsGithub className="icon" size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFacebook className="icon" size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <MdMail className="icon" size={30} />
            </a>
          </li>
        </ul>
        <BsArrowUpSquare size={30} className="arrow" />
        <p>©Veronika Mitichashvili 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
