import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <section className='svg-links'>
                <NavLink to='/about' className='nav' ><span className='nav-text'>About Me</span></NavLink>
                <NavLink to='/projects' className='nav' ><span className='nav-text'>Projects</span></NavLink>
                <NavLink to='/contact' className='nav' ><span className='nav-text'>Contact</span></NavLink>
            </section>
        </nav> 
    )
}

export default NavBar;