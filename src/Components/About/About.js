import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className='about-section'>
        <section className='about-chelo'>
            <img src='https://alumni.turing.io/sites/default/files/styles/graduate_full_profile/public/DSC_3400-Edit.jpg?itok=VgVyiHzN' alt='Consuelo posing outside holding her laptop in Denver Colorado' />
            <section className='paragraph'>
                <h2> Hiya!</h2>
                <h2>I'm Consuelo.</h2>
                <article>
                    <p> I am a Front-End Developer based in Denver, Colorado and willing to relocate.</p>
                    <p> I have a passion for creating websites that are fun yet easy to use for users using React.</p>
                    <p> Currently, the opportunities I am looking for are junior Front-End, internship, or apprenticeship positions.</p>
                </article>
            </section>
        </section>
        <section className='link-section'>
            <a href='https://www.linkedin.com/in/consuelo-sierra-lopez/'><img className='link' src='https://www.freepngimg.com/download/social_media/74289-media-icons-computer-linkedin-social-free-transparent-image-hd.png' alt='linkedin icon'/></a>
            <a href='https://twitter.com/_consueloCodes5' ><img className='link' src='https://icons-for-free.com/iconfiles/png/512/logo+twitter+twitter+logo+icon-1320167831451644641.png' alt='twitter icon' /></a>
            <a href='https://github.com/' ><img className='link' src='https://icon-library.net/images/github-icon-png/github-icon-png-22.jpg' alt='github icon' /></a>
            <a href="mailto:asierralopez526@gmail.com" ><img className='link' src='https://library.kissclipart.com/20180902/ekq/kissclipart-transparent-background-mail-icon-clipart-computer-d100975ab74ec96b.png' alt='github icon' /></a>

        </section>
    </section>
  )
}

export default About;