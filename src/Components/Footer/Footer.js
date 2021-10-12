import React from 'react';
import "./Footer.css";
import { NavLink, Link } from 'react-router-dom';

import skull from "../../Images/skull.png";

const MENU = ["Home", "Characters", "Shoop", "Contact"]

const Footer = () => {

    const menu = MENU.map((m, id) => 
        {
            let mroute
            if (m === "Home") {
                mroute = "/"
            } else {
                mroute = "/" + m.toLowerCase()
            }
            return (<li key={id}>
            <NavLink to={mroute}
            exact={`${m === "Home" ? true : false}`}
            >
            {m}
            </NavLink>
            </li>)}
            )

    return (
        <div className="footer">
            <Link to= "/" exact>
            <div className="footer-logo logo title">
              <img src={skull} alt="Skull" className="skull"></img>
              <span>Gothic II Fanpage</span>
            </div>
            </Link>
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
