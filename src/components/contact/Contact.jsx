import React, {useRef} from "react";
import "./Contact.scss";
import { GoMail } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault(); //doesn't send the form on default 
    emailjs.sendForm('service_04z8af9', 'template_bx26nh7',form.current,'gU0vNx5Gn9Tf4FTCD');
    e.target.reset(); //resets the form
  };
  return (
    <section id="contact">
      <div className="headings">
        <h5>let’s talk</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contact-container">
        <form ref={form} onSubmit={sendMessage}>
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
            <a href="mailto:nika.mitichashili@gmail.com" target="_blank">Send a message</a>
          </div>
          <div className="trigger">
            <RiMessengerLine size={33} />
            <h4>Messenger</h4>
            <h6>facebookid</h6>
            <a href="https://m.me/VeronikaMi01" target="_blank">Send a message</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
