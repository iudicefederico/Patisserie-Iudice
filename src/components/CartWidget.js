import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "./context/CartContext";

export default function CartWidget() {
  const { cartFinal } = useContext(CartContext);
  const { cart } = cartFinal;

  const sum = cart.reduce(function (prev, current) {
    return prev + parseInt(current.cantidad);
  }, 0);

  return (
    <div className="icon">
      VER CARRITO
      <FontAwesomeIcon icon={faShoppingCart} />
      {cart.length > 0 ? <div>{sum}</div> : <div></div>}
    </div>
  );
}
