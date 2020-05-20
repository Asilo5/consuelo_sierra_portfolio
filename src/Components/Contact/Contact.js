 import React from 'react';
 import './Contact.scss';
 import { FaEnvelope } from 'react-icons/fa';

 const Contact = () => {
   
    return (
        <section className='contact'>
            <h2>Looking for new opportunities</h2>
            <p>I'm open to opportunities in the tech field that will challenge me to new positions, languages, and frameworks.</p>
            <p>if you are looking for a new addition in your team or website to be made, contact me below.</p>
            <button> <FaEnvelope /> Message Me</button>
        </section>
    )
 };

 export default Contact;