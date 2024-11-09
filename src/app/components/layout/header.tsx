"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="logo"> BN.</div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/sneakers">sneakers</a>
                <a href="/casual">casual</a>
                <a href="/heels">heels</a>
                
            </nav>
            <div className="icons">
                <a href="#"><FontAwesomeIcon icon={faUser} /></a>
                <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </div>
        </header>
    );
};

export default Header;