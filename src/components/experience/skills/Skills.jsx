import React from "react";
import "./Skills.scss";

function Skills() {
  const skills = [
    { id: 1, skill: "HTML5", progress: "70%" },
    { id: 2, skill: "CSS3", progress: "80%" },
  ];

  return (
    <>
      {skills.map((skill) => (
        <div className="skill" key={skill.id}>
          <h4>{skill.skill}</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: skill.progress }}></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Skills;
