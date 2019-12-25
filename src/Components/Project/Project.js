import React from 'react';
import './Project.scss';

const Project = ({ name, description, image, stack }) => {

    let techStack = stack.map((tech) => <p key={tech}>{tech}</p>)
    return (
      <section className='project'>
         <h3>{name}</h3>
         <img src={image} alt={name}/>
         <section className='project-info'>
            <p>{description}</p>
            <p>Stack:</p>
            <p>{techStack}</p>
         </section>
      </section>
    )
}

export default Project;