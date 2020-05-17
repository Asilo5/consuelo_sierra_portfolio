import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
                <NavLink to='/about' className='nav' >About Me</NavLink>
                <NavLink to='/projects' className='nav' >Projects</NavLink>
                <NavLink to='/contact' className='nav' >Contact</NavLink>
        </nav> 
    )
}

export default NavBar;