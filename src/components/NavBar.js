import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <li>
        <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/products" exact>
          Products
        </NavLink>
        <NavLink className="nav-link" to="/addProduct" exact>
          Add-Product
        </NavLink>
      </li>
    </div>
  );
}

export default NavBar;
