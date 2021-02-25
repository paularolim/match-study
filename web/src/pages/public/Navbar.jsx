import React from 'react';

import './Navbar.css';

function Navbar(props) {
    return (
      <nav className="Navbar">
        <h1 className="navbar-brand">LOGO</h1>
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/" className="navbar-item-link">Home</a></li>
          <li className="navbar-item"><a href="/" className="navbar-item-link">Sobre nós</a></li>
          <li className="navbar-item"><a href="/" className="navbar-item-link">Contato</a></li>
          <li className="navbar-item"><a href="/" className="navbar-item-link">Login</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;
