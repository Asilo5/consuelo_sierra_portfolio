import React from 'react';
import './Resume.scss';

const Resume = () => {
  
    return (
      <section className='resume'>

         <img src='./images/CV.png' alt='Consuelos CV' />

         <a href='./images/CV.png' download>
           <img src='./images/CV.png' alt='Consuelos CV' />
        </a>
      </section>
    );
};

export default Resume;