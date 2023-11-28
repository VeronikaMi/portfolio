import React from "react";
import "./About.scss";
import "aos/dist/aos.css";

import person from "../../assets/main-pic.jpg";
function About() {
  // useEffect(() => {
  //   AOS.init({duration:1500});
  // }, []);
  // data-aos="fade-right"
  // data-aos="fade-in"

  return (
    <section id="about">
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
            I've always been naturally curious, with a mind teeming with
            questions every day. This innate curiosity ensures that each day
            brings a chance to learn something new, no matter how small. I take
            pride in my responsibility and punctuality, always ensuring tasks
            are completed. I'm passionate about personal growth, often immersing
            myself in reading, listening, or writing to continuously improve.
          </p>
          <h5>as a developer</h5>
          <p>
            With over 3 years of practical experience in Front-End development
            (excluding my explorations during high school), I pursued Computer
            Science at university. Presently, I hold the role of an Angular
            Developer at an IT company. Continuously pursuing learning
            opportunities, I actively enroll in courses spanning Front-End
            Development and related fields. My true passion lies in designing
            visually captivating websites, breathing life into them with
            functional code.
          </p>
          <h5>as a hobbyist</h5>
          <p>
            Driven by curiosity, I often delve into various hobbies. Recently,
            I've taken up boxing, delved into AR, and ventured into 3D modeling
            with Blender. Each pursuit has a distinct aim: boxing for bolstering
            confidence, stamina, and self-defense; AR for crafting both
            functional and enjoyable apps for users, along with crafting
            personalized filters featuring anime characters; and in Blender, my
            goal is to create animations, a passion I've cherished for a long
            time.
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
