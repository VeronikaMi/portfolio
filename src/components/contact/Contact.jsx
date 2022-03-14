import React from "react";
import "./Contact.scss";
import { GoMail } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";

function Contact() {
  const sendMessage = (form) => {
    console.log(form);
  };
  return (
    <section id="contact">
      <div className="headings">
        <h5>let’s talk</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contact-container">
        <form onSubmit={sendMessage}>
          <div className="input-field">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" />
          </div>
          <div className="input-field">
            <label htmlFor="mail">Email</label>
            <input type="email" name="mail" />
          </div>
          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="triggers">
          <div className="trigger">
            <GoMail size={33} />
            <h4>Email</h4>
            <h6>myeamil@gmail.com</h6>
            <a href="mailto:">Send a message</a>
          </div>
          <div className="trigger">
            <RiMessengerLine size={33} />
            <h4>Messenger</h4>
            <h6>facebookid</h6>
            <a href="https/m.me/">Send a message</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
