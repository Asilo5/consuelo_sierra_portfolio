import React from 'react';
import './ProjectsContainer.scss';
import { allProjects } from '../../allProjects/allProjects';
import Project from '../Project/Project';

const ProjectsContainer = () => {
  let theProjects = allProjects.map((project) => {
      return <Project key={project.name} {...project}/>
  })
    return (
        <section>
            {theProjects}
        </section>
    )
}

export default ProjectsContainer;