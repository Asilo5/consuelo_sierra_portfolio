import React from 'react';
import './Resume.scss';

const Resume = () => {
  
  console.log({Image})
    return (
      <section className='resume'>

         <img src='/static/media/CV.c8d5f31c.png' alt='Consuelos CV' />

         <a href='/static/media/Consuelo Sierra.59d199a7.pdf' download> Click to Download PDF </a>
      </section>
    );
};

export default Resume;