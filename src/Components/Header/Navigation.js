import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/auth-context'
import Avatar from '../UIElements/Avatar';

const MENU = ["Home", "Characters", "Store", "Contact"]

const Navigation = ({ openModal }) => {

    const auth = useContext(AuthContext);

    const menu = MENU.map((m, id) => 
    {
        let mroute
        if (m === "Home") {
            mroute = "/"
        } else {
            mroute = "/" + m.toLowerCase()
        }
        
        return (<li className="main-navigation" key={id}>
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
            
            {!auth.isLoggedIn && <li className="user-navigation" id="auth" onClick={openModal}>
                Login
            </li>}
            {auth.isLoggedIn && <li className="user-navigation" id="auth" onClick={auth.logout}>
                Logout
            </li>}
            
            {auth.isLoggedIn && <li className="user-navigation" id="cart" onClick={openModal}>
            <i class="fas fa-shopping-cart"></i>
            </li>}
            {auth.isLoggedIn &&
               <li className="user-navigation" onClick={() => console.log(auth.userId)
               }><Avatar image={`${process.env.REACT_APP_BACKEND_URL}/${auth.avatar}`} alt="avatar" /></li> 
            }
            {auth.isLoggedIn && (auth.role === "admin") && <li className="user-navigation" id="admin">
            <NavLink to="/admin">
                Admin
                </NavLink>
                </li>}
        </ul>
    )
}

export default Navigation
