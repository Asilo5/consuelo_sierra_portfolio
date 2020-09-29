import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='footer'>
        <section className='links'>
            <a href='https://www.linkedin.com/in/consuelo-sierra/'> LinkedIn </a>
            <a href='https://twitter.com/_consueloCodes5'> Twitter </a>
            <a href='https://github.com/Asilo5' > GitHub </a>
        </section>

        <p> &copy; 2020 <a href='https://www.linkedin.com/in/consuelo-sierra/' >Consuelo Sierra </a> </p>
    </section>
  );
};

export default Footer;