import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/"activeCLassName="nav-active">
                <img src="./assets/home.pgn"></img>
            </NavLink>
            <NavLink exact to="details" activeClassName ="nav-active">
                Details
            </NavLink>
            <NavLink exact to="discover" activeClassName ="nav-active">
                Discover
            </NavLink>

        </div>
    );
};

export default Navigation;