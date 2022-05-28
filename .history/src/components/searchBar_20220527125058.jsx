import { faYoutube, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <FontAwesomeIcon icon={faYoutubeSquare} className="searchbar-logo" />
        <span className="searchbar-textlogo">Youtube</span>
        <form action="" className="searchbar-form">
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search.."
          />
          <button className="searchbar-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
