import React, { useState } from "react";
import "./Search.css";
import { products } from "../data";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* search input */}
      <div className="form-control">
        <input type="search" placeholder="search" className="search-input" />
      </div>
    </form>
  );
};

export default Search;
