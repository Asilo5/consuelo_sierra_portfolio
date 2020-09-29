import React from 'react';
import './Resume.scss';
import CV from '../../assets/CV.png';
import Pdf from '../../assets/Consuelo-Sierra-og.pdf';

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

         <img src={CV} alt='Consuelos CV' />

         <a href={Pdf} download> Click to Download PDF </a>
      </motion.section>
    );
};

export default Resume;