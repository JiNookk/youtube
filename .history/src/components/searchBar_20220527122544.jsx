import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <>
        <span className="searchbar-logo">logo</span>
        <span className="searchbar-textlogo">Youtube</span>
        <form action="" className="searchbar-form">
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search.."
          />
          <button className="searchbar-btn"></button>
        </form>
      </>
    );
  }
}

export default SearchBar;
