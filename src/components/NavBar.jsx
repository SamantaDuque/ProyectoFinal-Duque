import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../App.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/logo-teje.png" alt="Logo Teje y Desteje" className="navbar-logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
