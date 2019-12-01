import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1>Consuelo</h1>
            <section>
                <NavLink to='/about' className='nav-link' activeClassName='active-nav' >About</NavLink>
                <NavLink to='/projects' className='nav-link' activeClassName='active-nav' >Projects</NavLink>
                <NavLink to='/contact' className='nav-link' activeClassName='active-nav' >Contact</NavLink>
            </section>
        </nav> 
    )
}

export default NavBar;