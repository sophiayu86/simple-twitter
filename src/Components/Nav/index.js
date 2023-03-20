import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
const Nav=()=>{
    return(
        <nav className={style.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;