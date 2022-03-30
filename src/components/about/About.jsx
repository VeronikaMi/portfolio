import React,{useEffect} from "react";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import person from "../../assets/main-pic.png";
function About() {
  // useEffect(() => {
  //   AOS.init({duration:1500});
  // }, []); 
  // data-aos="fade-right"
  // data-aos="fade-in"

  return (
    <section id="about" >
      <div className="headings">
        <h5>get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="info">
        <div className="img-with-background">
          <div className="img">
            <img src={person} alt="person" />
          </div>
        </div>
        <div className="about-me">
          <h5>as a person</h5>
          <p>
            By nature I always was a curious person , having numerous questions
            going through my mind every day. Thanks to that, there isn’t a day
            that goes by without learning something new , even if it is
            something small. I am a responsible and punctual person that always
            finishes the started task. I am a fan of self-growth so you will
            often find me listening, reading or writing something to improve
            further.
          </p>
          <h5>as a developer</h5>
          <p>
            I have 3+ experience in Front-End (if we don’t count the time I
            spent playing around in high school) ). I am studying Computer
            Science at university (4th course). Currently I am working as an
            Angular Developer at IT company. In addition to that , I regularly
            attend courses connected to Front-End Development and others. I love
            styling websites and breathing life into them by writing
            functionality and see it come to life.
          </p>
          <a href="#contact">
            <button type="button" className="btn btn-primary">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
