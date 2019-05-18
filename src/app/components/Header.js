import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
       
            <nav>
                <div className="nav-wrapper">
                    <Link to='/'>
                        <span className="brand-logo">Bitbook</span>
                    </Link>
                    <ul id="nav-mobile" className="right">
                        <li>
                        <li><Link to='/'>Posts</Link></li>
                        <i className="material-icons right"></i></li>
                        <li><Link to='/people'>People</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/login'>Logout</Link></li>

                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Header;