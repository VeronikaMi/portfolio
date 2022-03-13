import React from "react";
import "./Portfolio.scss";
function Portfolio() {
  const projects = [
    { id: 1, name: "Ableton Clone", src: "" },
    { id: 2, name: "Ableton Clone", src: "" },
    { id: 3, name: "Ableton Clone", src: "" },
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
            <div className="img"></div>
            <h3>{project.name}</h3>
            <div className="btn-container">
              <button type="button" className="btn btn-primary">
                See Live
              </button>
              <button type="button" className="btn btn-secondary">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-primary see-more">
        See More
      </button>
    </section>
  );
}

export default Portfolio;
