import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🛍️</span> ShopReact
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="#cart" className="nav-link">Cart</a>
          </li>
          <li className="nav-item">
            <a href="#login" className="nav-link">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
