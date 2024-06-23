import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/charts" className="nav-link">
            Charts
          </Link>
          <Link to="/Data Perusahaan" className="nav-link">
            Data Perusahaan
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
