import React from "react";

function ProjectItem({ name, about, technologies, id}) {

  const techs = technologies.map((tech)=>{
    
    return <span key={tech}>{tech}</span>;
  });
  return (
    <div className="project-item">
      <h3 >{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
        {/* render a <span> for each technology in the technologies array */techs}
      </div>
    </div>
  );
}

export default ProjectItem;
