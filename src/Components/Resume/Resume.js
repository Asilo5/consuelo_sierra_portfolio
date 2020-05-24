import React from 'react';
import './Resume.scss';
import CV from '../../assets/CV.png';
import Pdf from '../../assets/Consuelo Sierra.pdf';

import { motion } from 'framer-motion';

const Resume = ({ pageVariants, pageTransitions }) => {
  
    return (
      <motion.section 
        className='resume'
        initial={pageVariants.out}
        animate={pageVariants.in}
        exit={pageVariants.out}
        transition={pageTransitions}
      >

         <img src='/static/media/CV.c8d5f31c.png' alt='Consuelos CV' />

         <a href='/static/media/Consuelo Sierra.59d199a7.pdf' download> Click to Download PDF </a>
      </motion.section>
    );
};

export default Resume;