import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      {/* <NavLink style={{ marginRight: "10px" }} to="/">
        Home
      </NavLink> */}
      <NavLink className="nav-link" to="/product">
        Product
      </NavLink>
    </div>
  );
}

export default NavBar;
