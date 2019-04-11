import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to='/'>
                        <a className="brand-logo">Bitbook</a>
                    </Link>
                    <ul id="nav-mobile" className="right">

                        <li><Link to='/'>Posts</Link></li>
                        <li><Link to='/people'>People</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>

                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Header;