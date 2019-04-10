import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Bitbook</a>
                    <ul id="nav-mobile" className="right">
                        <li><Link to='/'>Feed</Link></li>
                        <li><Link to='/people'>People</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Header;