import React, { useState, useEffect } from "react";
import "./StripeCheckout.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils";
import { useNavigate } from "react-router-dom";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const navigate = useNavigate();

  // STRIPE CODE
  const [succeeded, setSucceded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const createPaymentItent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_amount })
      );
      console.log(data);
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentItent();
    //eslint-disable-next-line
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceded(true);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to Homepage shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello!</h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form className="checkout-form" id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
          className="checkout-btn"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message-hidden"}>
          Payment succeeded, see the results in your{" "}
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard
          </a>
          Refresh the page to pay again
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <section>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};

//   input {
//     border-radius: 6px;
//     margin-bottom: 6px;
//     padding: 12px;
//     border: 1px solid rgba(50, 50, 93, 0.1);
//     max-height: 44px;
//     font-size: 16px;
//     width: 100%;
//     background: white;
//     box-sizing: border-box;
//   }

export default StripeCheckout;
