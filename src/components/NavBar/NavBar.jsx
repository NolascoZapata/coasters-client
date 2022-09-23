import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
  return (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </nav>
      );
    }

export default NavBar