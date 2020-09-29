import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className='about-section'>
        <section className='about-chelo'>
            <img src='https://alumni.turing.io/sites/default/files/styles/graduate_full_profile/public/DSC_3400-Edit.jpg?itok=VgVyiHzN' alt='Consuelo posing outside holding her laptop in Denver Colorado' />
            <section className='name-info'>
                <h3> Hiya!</h3>
                <article className='paragraph'>
                    <p> Front-End Developer based in Denver, Colorado. I am looking for opportunities here in Denver and around the globe.
                 I love creating websites and have a passion for web design and engineering.
                 </p>
                </article>
                <section className='link-section'>
                    <a href='https://www.linkedin.com/in/consuelo-sierra/'><img className='link' src='https://i.ya-webdesign.com/images/linkedin-button-png-1.png' alt='linkedin icon'/></a>
                    <a href='https://twitter.com/_consueloCodes5' ><img className='link' src='https://finnsranch.com/wp-content/uploads/2019/04/logo-twitter-circle-png-transparent-image-1-1024x1024.png' alt='twitter icon' /></a>
                    <a href='https://github.com/Asilo5' ><img className='link' src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='github icon' /></a>
                </section>
            </section>
        </section>
    </section>
  )
}

export default About;