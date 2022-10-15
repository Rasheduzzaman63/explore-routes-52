import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive}) =>  isActive ? 'active' : undefined } to='/home'>HOme</NavLink>
            <NavLink to='/about'>ABout</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
        </div>
    );
};

export default Header;