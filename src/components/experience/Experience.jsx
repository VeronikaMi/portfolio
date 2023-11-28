import React from "react";
import "./Experience.scss";
function Experience() {
  const skills = [
    { id: 1, skill: "HTML5", progress: 80 },
    { id: 2, skill: "CSS3", progress: 90 },
    { id: 3, skill: "SASS", progress: 80 },
    { id: 4, skill: "JavaScript", progress: 80 },
    { id: 5, skill: "TypeScript", progress: 90 },
    { id: 6, skill: "Angular", progress: 80 },
    { id: 7, skill: "Tailwind CSS", progress: 70 },
    { id: 8, skill: "React", progress: 50 },
    { id: 9, skill: "Design(Figma)", progress: 60 },
    { id: 10, skill: "UI/UX", progress: 50 },
  ];

  return (
    <section id="experience">
      <div className="headings">
        <h5>what skills I posses</h5>
        <h2>My Experience</h2>
      </div>
      <p className="quote">
        “There's always room for improvement no matter what.” -{" "}
        <span className="ali">Ali Krieger</span>
      </p>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            <h4>{skill.skill}</h4>
            <div
              className="progress-bar"
              style={{
                background: `linear-gradient(to right, #23b5d3 ${
                  skill.progress
                }%, transparent ${100 - skill.progress}%)`,
              }}
            >
              <span>{skill.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      <p className="growth">...and growing</p>
    </section>
  );
}

export default Experience;
