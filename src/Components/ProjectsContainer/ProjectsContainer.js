import React from 'react';
import './ProjectsContainer.scss';
import { allProjects } from '../../allProjects/allProjects';
import Project from '../Project/Project';

const ProjectsContainer = () => {
  let theProjects = allProjects.map((project) => {
      return <Project key={project.name} {...project}/>
  })
    return (
        <section className='project-container'>
           <span role="img" className='arrow'>👉🏻</span>
            {theProjects}
           <span role="img" className='arrow'>👈🏻</span>
        </section>
    )
}

export default ProjectsContainer;