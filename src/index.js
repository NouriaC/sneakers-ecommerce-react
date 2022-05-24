import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/global_context";
import { CartProvider } from "./context/cart_context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
