import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* search input */}
      <div className="form-control">
        <input
          type="text"
          name="text"
          placeholder="search"
          className="search-input"
          value="search"
        />
      </div>
    </form>
  );
};

export default Search;
