import React from 'react';
import Logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Emma John" />
            <nav className="navbar">
                <div className="container">
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;