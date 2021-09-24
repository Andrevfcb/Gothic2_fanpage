import React from 'react';
import { NavLink } from 'react-router-dom';

const MENU = ["Home", "Characters", "Shoop", "Contact"]

const Navigation = () => {

    const menu = MENU.map(m => 
    {
        let mroute
        if (m === "Home") {
            mroute = "/"
        } else {
            mroute = "/" + m.toLowerCase()
        }
        return (<li>
        <NavLink to={mroute}
        exact={`${m === "Home" ? true : false}`}
        >
        {m}
        </NavLink>
        </li>)}
        )
        
    return (
        <ul className='nav'>
           {menu}
            <li className="user-navigation">
                Login
            </li>
            <li className="user-navigation">
                <NavLink to=":uid">
                UserAvatar
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation
