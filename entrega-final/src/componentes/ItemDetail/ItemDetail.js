import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { motion } from "framer-motion";
import { ponerPuntos } from "../../Funciones/ponerPuntos";

export default function ItemDetail({ producto }) {
  const {
    id,
    nombre,
    precio,
    descripcion,
    imagen,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
  } = producto;

  const [finalizar, setFinalizar] = useState(false);

  function onAdd(contador) {
    setFinalizar(true);
    console.log(contador);
  }

  const [imagenURL, setImagenURL] = useState(imagen);

  function cambiarImagen(img) {
    setImagenURL(img);
  }

  return (
    <div className="ItemDetail">
      <div className="ImagenContainer">
        <img src={imagen} alt={nombre} />
      </div>

      <div className="DescripcionContainer">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="PreVenta">
          <p className="Precio">${ponerPuntos(precio.toString())}</p>
          <div className="DetallesVenta">
            {finalizar ? (
              <NavLink to="/carrito" className="BotonVolver">
                Finalizar Compra
              </NavLink>
            ) : (
              <div className="AgregarCarrito">
                <ItemCount
                  stock={5}
                  initial={1}
                  producto={producto}
                  onAdd={onAdd}
                />
              </div>
            )}
          </div>
        </div>
        <NavLink to="/" className="BotonVolver">
          Volver
        </NavLink>
      </div>
    </div>
  );
}