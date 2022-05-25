import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartContent from "../components/CartContent";
import PageHero from "../components/PageHero";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="page-100">
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <Link to="/collections" className="btn">
            Fill it
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <section className="page">
        <CartContent/>
      </section>
    </main>
  );
};

export default CartPage;
