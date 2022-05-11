import React from "react";

function TechnologyList(props) {
  return <span>projects.technologies</span>
}

function ProjectItem({ name, about, technologies }) {

  const spanTags = technologies.map((technology) => {
    return <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {spanTags}
      </div>
    </div>
  );
}

export default ProjectItem;
