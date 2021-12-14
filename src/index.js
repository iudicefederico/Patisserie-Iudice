import React from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "react-use-cart";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
