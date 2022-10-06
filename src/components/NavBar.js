import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <li>
        <NavLink className="nav-link" to="/home" exact>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/" exact>
          Products
        </NavLink>
      </li>
    </div>
  );
}

export default NavBar;
