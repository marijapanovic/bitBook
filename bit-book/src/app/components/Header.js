import React from 'react';
import { Link } from 'react-router-dom';
import {Dropdown, Button} from 'react-materialize';

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
                        <Dropdown className="nav-wrapper" trigger={<Link className="dropdownbtn">Posts</Link>}><a href="#">Post</a><a href="#">Image</a><a href="#">Video</a></Dropdown>
                        <i className="material-icons right"></i></li>
                        <li><Link to='/people'>People</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>

                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Header;