import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <li>
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/">
          Products
        </Link>
      </li>
    </div>
  );
}

export default NavBar;
