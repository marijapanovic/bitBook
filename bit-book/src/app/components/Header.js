import React from 'react';

const Header = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Bitbook</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/">Feed</a></li>
                        <li><a href="#">People</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Header;