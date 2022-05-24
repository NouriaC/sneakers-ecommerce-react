import React, { useEffect } from "react";
import "./Search.css";
import { useGlobalContext } from "../context/global_context";

const Search = ({ products }) => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const updateFilter = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(searchTerm);
    });
    return filteredProducts;
  };

  console.log(searchTerm);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* search input */}
      <div className="form-control">
        <input
          type="text"
          // name="searchTerm"
          placeholder="search"
          className="search-input"
          value={searchTerm}
          onChange={updateFilter}
        />
      </div>
    </form>
  );
};

export default Search;
