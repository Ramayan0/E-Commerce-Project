import React from "react";

import { Link } from "react-router-dom";
// import "./Home.css";
import "./Header.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { faUnderline } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        {/* <h4 style={{ color: "black" }}>Remy Luxe Store</h4> */}
        <img src="../src/images/Remy-luxe.png" alt="remy-lux" />
      </Link>

      <div className="header_right">
        <p> View Cart</p>
        {/* <LanguageIcon/> */}
        <Link to="/">
          <AddShoppingCartIcon className="header-icon" />
        </Link>

        <ExpandMoreIcon />

        {/* <Avatar/> */}
      </div>
    </div>
  );
}

export default Header;
