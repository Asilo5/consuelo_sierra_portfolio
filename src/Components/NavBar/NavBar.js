import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
                <NavLink to='/' activeClassName='active' className='nav' >About Me</NavLink>
                <NavLink to='/projects' activeClassName='active' className='nav' >Projects</NavLink>
                <NavLink to='/resume' activeClassName='active' className='nav' >Resume</NavLink>
        </nav> 
    )
}

export default NavBar;