import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='footer'>
        <section className='links'>
            <a href='https://www.linkedin.com/in/consuelo-sierra-lopez/'> LinkedIn </a>
            <a href='https://twitter.com/_consueloCodes5'> Twitter </a>
            <a href='https://github.com/' > GitHub </a>
        </section>

        <p> &copy; 2020 <a href='https://github.com/' >Consuelo Sierra </a> </p>
    </section>
  );
};

export default Footer;