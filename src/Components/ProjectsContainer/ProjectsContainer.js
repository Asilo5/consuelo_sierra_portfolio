import React from 'react';
import './ProjectsContainer.scss';
import { allProjects } from '../../allProjects/allProjects';
import Project from '../Project/Project';

import { motion } from 'framer-motion';

const ProjectsContainer = ({ pageTransitions }) => {
  let theProjects = allProjects.map((project) => {
      return <Project key={project.name} {...project}/>
  })
    return (
        <motion.section 
          className='project-container'
          initial={pageTransitions.out}
          animate={pageTransitions.in}
          exit={pageTransitions.out}
        > 
            {theProjects}
        </motion.section>
    )
}

export default ProjectsContainer;