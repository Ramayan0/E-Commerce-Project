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

  return (
    <div className="header">
      <Link to="/">
        {/* <h4 style={{ color: "black" }}>Remy Luxe Store</h4> */}
        <img src={require("./Remy.png")} className="img" />
      </Link>

      <div id="search">
        <form id="search-form" onChange={handleChange}>
          <input
            value={search}
            type={"text"}
            placeholder="Search Product...."
          ></input>
          <button id="search-form-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      {/* <div className="input-group">
        <div id="search-autocomplete" className="form-outline">
          <input type="search" id="form1" className="form-control" value={search} />
          <label className="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div> */}

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
