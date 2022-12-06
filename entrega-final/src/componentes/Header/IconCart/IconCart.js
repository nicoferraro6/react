import React from "react";
import "./IconCart.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

export default function IconCart() {
  const { carrito } = useContext(UserContext);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    let cantidadTotal = 0;
    for (var i = 0; i < carrito.length; i++) {
      cantidadTotal += carrito[i].cantidad;
    }
    setCantidad(cantidadTotal);
  }, [carrito]);

  return (
    <div className="IconCartContainer">
      {carrito.length > 0 ? (
        <i class="bx bx-cart-alt">
          <span className="SpanCarrito">{cantidad}</span>
        </i>
      ) : null}
    </div>
  );
}