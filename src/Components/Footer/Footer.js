import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const MENU = ["Home", "Characters", "Shoop", "Contact"]

const Footer = () => {

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
        <div className="footer">
            <div className="footer-logo">
                LOGO
            </div>
            <div className="footer-menu">
                <h3>MENU</h3>
                <ul className="nav">
                {menu}
                </ul>
            </div>
        </div>
    )
}

export default Footer
