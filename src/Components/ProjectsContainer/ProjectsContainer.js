import React from 'react';
import './ProjectsContainer.scss';
import { allProjects } from '../../allProjects/allProjects';
import Project from '../Project/Project';

import { motion } from 'framer-motion';
 
const ProjectsContainer = ({ pageVariants, pageTransitions }) => {
  let theProjects = allProjects.map((project) => {
      return <Project key={project.name} {...project}/>
  })
    return (
        <motion.section 
          className='project-container'
          initial={pageVariants.out}
          animate={pageVariants.in}
          exit={pageVariants.out}
          transition={pageTransitions}
        > 
            <section className='intro-title'>
                <h2>Projects</h2>
                <p>I have experience building projects using React, Redux, Vue, vanilla Javascript, jQuery and such.</p>
                <p>Scroll down to see the list of projects built!</p>
            </section>
            {theProjects}
        </motion.section>
    )
}

export default ProjectsContainer;