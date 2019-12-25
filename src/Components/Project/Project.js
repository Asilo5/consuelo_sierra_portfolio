import React from 'react';

const Project = ({ name, description, image, stack }) => {

    let techStack = stack.map((tech) => <p key={tech}>{tech}</p>)
    return (
      <section>
         <h3>{name}</h3>
         <img src={image} alt={name}/>
         <p>{description}</p>
         <p>Stack:</p>
         <p>{techStack}</p>
      </section>
    )
}

export default Project;