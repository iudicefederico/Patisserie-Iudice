import React, { useState } from "react";
import Productos from "../products/Productos";

const CartContext = React.createContext({});

export const useProductos = () => {
  const [cartFinal, setCartFinal] = useState(Productos);

  const addToCart = (payload) => {
    if (cartFinal.cart.length === 0) {
      setCartFinal({
        ...cartFinal,
        cart: [payload],
      });
      return;
    }

    const carritoDraft = [...cartFinal.cart];
    const prodEncontrado = cartFinal.cart.find(
      (item) => item.id === payload.id
    );

    if (prodEncontrado) {
      prodEncontrado.cantidad = parseInt(payload.cantidad);
      setCartFinal({
        ...cartFinal,
        cart: carritoDraft,
      });
    } else {
      setCartFinal({
        ...cartFinal,
        cart: [...cartFinal.cart, payload],
      });
    }
  };

  const removeFromCart = (payload) => {
    setCartFinal({
      ...cartFinal,
      cart: cartFinal.cart.filter((items) => items.id !== payload.id),
    });
  };
  return {
    addToCart,
    removeFromCart,
    cartFinal,
  };
};

export default CartContext;
