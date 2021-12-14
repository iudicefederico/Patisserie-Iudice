import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function ItemCount(props) {
  const [cantidad, setCantidad] = useState(props.cantidad);

  return (
    <>
      <div>
        <h5>Cantidad: {cantidad} </h5>
        <h5>Stock: {props.stock} </h5>
      </div>
      <div>
        <Button
          text="+1"
          onAdd={() =>
            setCantidad(props.stock > cantidad ? cantidad + 1 : cantidad)
          }
        />
        <Button
          text="-1"
          onAdd={() => setCantidad(cantidad > 0 ? cantidad - 1 : cantidad)}
        />

        {cantidad > 0 && (
          <Link to={`/cart/`}>
            <button onClick={() => props.onAdd({ cantidad })}>
              {props.text}
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
