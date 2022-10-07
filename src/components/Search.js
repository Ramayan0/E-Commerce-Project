import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Search.css";
function Search({ onSearching }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    onSearching(search);
  }
  // console.log(setSearch);
  return (
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
  );
}

export default Search;
