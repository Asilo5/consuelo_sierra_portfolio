import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
                <NavLink to='/' className='nav' >About Me</NavLink>
                <NavLink to='/projects' className='nav' >Projects</NavLink>
                <NavLink to='/resume' className='nav' >Resume</NavLink>
        </nav> 
    )
}

export default NavBar;