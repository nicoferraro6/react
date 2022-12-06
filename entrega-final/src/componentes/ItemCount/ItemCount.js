import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext.js";

import "./ItemCount.css";

export default function ItemCount({ stock, initial, producto, onAdd }) {
  const { carrito, AddToCart, Cantidad } = useContext(UserContext);

  const [contador, setContador] = useState(initial);

  function itemCount(flag) {
    if (flag) {
      if (contador < stock) {
        setContador(contador + 1);
      }
    } else {
      if (contador > 1) {
        setContador(contador - 1);
      }
    }
  }

  return (
    <div className="Contador">
      <div className="ContadorContainer">
        <div className="Botones">
          <button onClick={() => itemCount(false)}>-</button>
          <p className="NumeroContador">{contador}</p>
          <button onClick={() => itemCount(true)}>+</button>
        </div>
      </div>
      <button
        className="BotonCarrito"
        onClick={() => {
          onAdd(contador);
          AddToCart({ ...producto, cantidad: contador });
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}