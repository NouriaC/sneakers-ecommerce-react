import React from "react";
import "./CartColumns.css";

const CartColumns = () => {
  return (
    <main className="cart-columns-section">
      <div className="cart-columns-content ">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr  className="cart-columns-hr"/>
    </main>
  );
};

export default CartColumns;
