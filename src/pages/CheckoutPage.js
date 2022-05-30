import React from "react";
import PageHero from "../components/PageHero";
import StripeCheckout from "../components/StripeCheckout";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <section className="page checkout-page">
        {cart.length < 1 ? (
          <div className="cart-empty">
            <h2>your cart is empty</h2>
            <Link to="/collections" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </section>
    </main>
  );
};

export default CheckoutPage;
