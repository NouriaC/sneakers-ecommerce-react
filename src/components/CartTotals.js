import React from "react";
import "./CartTotals.css";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <main className="cart-totals-section">
      <div>
        <article className="cart-totals">
          <h5>
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            {" "}
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn btn-cart-totals">
          proceed to checkout
        </Link>
      </div>
    </main>
  );
};

export default CartTotals;
