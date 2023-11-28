import React from "react";
import "./Portfolio.scss";
import greenbank from "../../assets/greenbank.png";
function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "GreenBank",
      src: greenbank,
      liveLink: "https://chatbot-uni-greenbank.netlify.app",
      gitHubLink: "https://github.com/VeronikaMi/chatbot-uni",
      details: ["Angular", "Figma"],
      description:
        "As a final part of my university degree, I developed a comprehensive website for Greenbank, a fictional banking service aimed at showcasing its array of financial offerings and services.",
    },
  ];
  return (
    <section id="portfolio">
      <div className="headings">
        <h5>projects I worked on</h5>
        <h2>My Portfolio</h2>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="img">
              <img src={project.src} alt={project.name} />
            </div>
            <h3>{project.name}</h3>
            <p className="project-details">
              {project.details.map((detail) => (
                <span>{detail}</span>
              ))}
            </p>
            <p className="description">{project.description}</p>
            <div className="btn-container">
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-primary">
                  See Live
                </button>
              </a>
              <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-secondary">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <button type="button" className="btn btn-primary see-more">
        See More
      </button> */}
    </section>
  );
}

export default Portfolio;
