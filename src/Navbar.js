import { Link } from 'react-router-dom';

import React from 'react';
const Navbar = () => {
  return (
    <nav className="navbar">
    <h1>The Dojo Blog</h1>
    <div className="links">
    <Link to="/">Home</Link>
    <Link to="/create" style={{
      color: 'white',
      backgroundColor: '#fec0c5',
      borderRadius: '8px'
    }}>New Blog</Link>
    </div>
    </nav>
  );
}

export default Navbar;