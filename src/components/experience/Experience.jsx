import React from "react";
import "./Experience.scss";
import Skills from "./skills/Skills";
function Experience() {
  return (
    <section id="#experience">
      <div className="headings">
        <h5>what skills I posses</h5>
        <h2>My Experience</h2>
      </div>
      <p className="quote">
        “There's always room for improvement no matter what.” -{" "}
        <span className="ali">Ali Krieger</span>
      </p>
      <div className="skills">
        <Skills />
      </div>
    </section>
  );
}

export default Experience;
