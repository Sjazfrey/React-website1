import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="name">Shirley Kaffrey</div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/project">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
