import React from "react";
import "./Product.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

const Product = ({ _id, name, price, imgURL }) => {
  return (
    <article>
      <div className="container">
        <img src={imgURL} alt={name} className="product-img" />
        <Link to={`/collections/${_id}`} className="product-link">
          <FaSearch />
        </Link>
      </div>
      <footer className="product-footer">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </article>
  );
};

export default Product;
