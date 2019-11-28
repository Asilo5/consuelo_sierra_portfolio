import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <h1>Consuelo Sierra</h1>
            <NavLink to='/about' activeClassName='active-nav' >About</NavLink>
            <NavLink to='/about' activeClassName='active-nav' >Projects</NavLink>
            <NavLink to='/about' activeClassName='active-nav' >Contact</NavLink>
        </nav>
    )
}

export default NavBar;