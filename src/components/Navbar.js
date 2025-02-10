import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/student">Student Dashboard</Link>
    </nav>
  );
}

export default Navbar;
