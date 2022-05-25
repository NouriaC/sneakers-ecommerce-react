import React from "react";
import "./CartColumns.css";

const CartColumns = () => {
  return (
    <main>
      <div className="cart-content cart-columns-section">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </main>
  );
};

export default CartColumns;
