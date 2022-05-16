import React, { useState } from "react";
import "./AddToCart.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useGlobalContext } from "../context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ singleProduct }) => {
  const { _id, colors = [] } = singleProduct;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    if (amount < 10) {
      setAmount((prevAmount) => prevAmount + 1);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  return (
    <section className="cart-section">
      <div className="cart-colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="cart-btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
