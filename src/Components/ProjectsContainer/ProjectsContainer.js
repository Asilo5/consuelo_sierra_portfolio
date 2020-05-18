import React from 'react';
import './ProjectsContainer.scss';
import { allProjects } from '../../allProjects/allProjects';
import Project from '../Project/Project';

import { motion } from 'framer-motion';

const ProjectsContainer = () => {
  let theProjects = allProjects.map((project) => {
      return <Project key={project.name} {...project}/>
  })
    return (
        <motion.section 
          className='project-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
           <span role="img" className='arrow'>👉🏻</span>
            {theProjects}
           <span role="img" className='arrow'>👈🏻</span>
        </motion.section>
    )
}

export default ProjectsContainer;