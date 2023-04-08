import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
    <img src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeW5LQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--140f7413881e9cf08034f2c9c880a5fd7e784da7/sami%20logo.png" alt="Description de votre image" />
    <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>




     
    </nav>
  );
}

export default Navbar;