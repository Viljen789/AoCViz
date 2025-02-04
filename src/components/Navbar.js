// src/components/Navbar.js
import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import '../styles/Navbar.css'; // Optional: For styling the navbar

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 onClick={()=>{navigate(`/`)}} >AoC 24 Visual Solutions</h1>
      <ul className="nav-links">
        <li>
          <NavLink exact="true" to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
