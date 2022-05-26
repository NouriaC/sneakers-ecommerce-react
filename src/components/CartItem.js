import React from "react";
import "./CartItem.css";
import { formatPrice } from "../utils";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};
  const decrease = () => {};

  return (
    <main className="cart-item-section">
      <div className="cart-item-title">
        <img src={image} alt={name} className="cart-item-img" />
        <div>
          <h5 className="cart-item-name">{name}</h5>
          <p className="cart-item-color">
            color: <span style={{ background: color }}></span>
          </p>
          <h5 className="cart-item-price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="cart-item-price">{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease}
        className="cart-item-amount-btns"
      />
      <h5 className="cart-item-subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="cart-item-remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </main>
  );
};

export default CartItem;
