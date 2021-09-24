import React from 'react';
import './Header.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <div className='logo'>LOGO</div>
            <div className='title'>
                <Link to= "/" exact>
                    Gothic 2 Fanpage
                </Link>
            </div>
            <div className='navigation'><Navigation /></div>
        </div>
    )
}

export default Header
