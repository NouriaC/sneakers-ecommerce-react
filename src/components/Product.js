import React from "react";
import "./Product.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ id, name, price, description, img }) => {
  return (
    <article>
      <div className="container">
        <img src={img} alt={name} className="product-img" />
        <Link to={`/products/${id}`} className="product-link">
          <FaSearch />
        </Link>
      </div>
      <footer className="product-footer">
        <h5>{name}</h5>
        <p>£{price / 100}</p>
      </footer>
    </article>
  );
};

export default Product;
