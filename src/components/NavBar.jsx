import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require("../images/Logo.png")} alt="Logo" width="90" height="90" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Recommendation</Link></li>
        <li><Link to="/consultants">Consultants</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
      </ul>
      <div className="navbar-profile">
        <FaUser size={24} />
      </div>
    </nav>
  );
};

export default Navbar;