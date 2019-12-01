import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className='about-section'>
        <section className='about-chelo'>
            <img src='https://media.licdn.com/dms/image/C4D03AQFtPmb2kohgGg/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=7E50_2FcNCJ7SCKrg9mirhuV29G66GYp_3ig201m5kE' alt='Consuelo posing outside holding her laptop in Denver Colorado' />
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
            <img className='link' src='https://www.freepngimg.com/download/social_media/74289-media-icons-computer-linkedin-social-free-transparent-image-hd.png' alt='linkedin icon'/>
            <img className='link' src='https://icons-for-free.com/iconfiles/png/512/logo+twitter+twitter+logo+icon-1320167831451644641.png' alt='twitter icon' />
            <img className='link' src='https://icon-library.net/images/github-icon-png/github-icon-png-22.jpg' alt='github icon' />
        </section>
    </section>
  )
}

export default About;