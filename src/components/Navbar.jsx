
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 

export const Navbar = () => {
    return ( 
        <nav className='navigation-wrapper'>
            <li>
                <NavLink to='/home' style={{ textDecoration: 'none', padding: '10px 70px', display: 'block', color: 'black' }} >Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' style={{ textDecoration: 'none', padding: '10px 70px', display: 'block', color: 'black' }}>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' style={{ textDecoration: 'none', padding: '10px 70px', display: 'block', color: 'black' }}>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/profile' style={{ textDecoration: 'none', padding: '10px 70px', display: 'block', color: 'black' }}>Profile</NavLink>
            </li>
        </nav>
     );
}
