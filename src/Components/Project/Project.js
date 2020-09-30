import React from 'react';
import './Project.scss';
 
const Project = ({ name, description, image, stack, link }) => {

    let techStack = stack.map((tech) => <p key={tech}>{tech}</p>)
    return (
      <section className='project'>
         <h3>{name}</h3>
         <img src={image} alt={name}/>
         <section className='project-info'>
            <p className='description'>{description}</p>
            <section className='stacks'>
               <h4>Stack:</h4>
               <p>{techStack}</p>
            </section>
         </section>
            <button><a href={link}>View Project</a></button>
      </section>
    )
}

export default Project;