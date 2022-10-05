import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <li>
        <Link className="nav-link" to="/products">
          Products
        </Link>
      </li>
    </div>
  );
}

export default NavBar;
