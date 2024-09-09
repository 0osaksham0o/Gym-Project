import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <p>ELITE EDGE FITNESS</p>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link> 
          </li>
          <li>
            <Link to="/register">Register</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
