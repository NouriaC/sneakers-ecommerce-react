import React from "react";
import "./CartContent.css";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <main className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="cart-link-container">
        <Link to="/collections" className="cart-link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="cart-link-btn cart-clear-btn"
          onClick={clearCart}
        >
          clear cart
        </button>
      </div>
      <CartTotals />
    </main>
  );
};

export default CartContent;
