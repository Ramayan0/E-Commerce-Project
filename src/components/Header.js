import React from "react";

import { Link } from "react-router-dom";
// import "./Home.css";
import "./Header.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Search.css";
// import { faUnderline } from "@fortawesome/free-solid-svg-icons";
function Header({ onSearching }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    onSearching(search);
  }
  // console.log("render");

  return (
    <div className="header">
      <Link to="/">
        {/* <h4 style={{ color: "black" }}>Remy Luxe Store</h4> */}
      </Link>

      <div id="search">
        <form id="search-form">
          <input
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Search Product...."
          ></input>
          <button id="search-form-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>

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
