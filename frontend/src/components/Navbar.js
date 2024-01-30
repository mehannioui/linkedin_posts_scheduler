import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className='navbar'>
      <Link className='nav-link nav-link-main' to='/'>
        Home
      </Link>
      <Link className='nav-link nav-link-main' to='/schedule'>
        Schedule a Post
      </Link>
      <Link className='nav-link nav-link-main' to='/posts'>
        View Posts
      </Link>
      <div className='auth-links'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
        <Link className='nav-link' to='/signup'>
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
