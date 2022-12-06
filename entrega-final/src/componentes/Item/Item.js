// import { Link } from "react-router-dom"
// import nikeair from '../assets/nikeair.jpg'


// const Item = ({product}) => {
//   return (
//     <Link to={`detail/${product.id}`}>
//     <div style={{border: ' 1px solid red'}}>
//         <h2>{product.title}</h2>
//         <h2>{product.category}</h2>
//     </div>
//     <div>
//       <img src={nikeair}/>
//     </div>
//     </Link>
    
    
//   )
// }

// export default Item

import React from "react";
import "./Item.css";
import { ponerPuntos } from "../../Funciones/ponerPuntos";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Item({ producto }) {
  const { id, nombre, precio, descripcion, imagen, categoria } = producto;
  return (
    <NavLink to={`/details/${producto.id}`} key={producto.id}>
      <motion.div whileHover={{ scale: 1.05 }} className="Item">
        <img src={imagen} alt="{nombre}" />
        <div className="ItemContainer">
          <h3>{nombre}</h3>
          <span>{descripcion}</span>
          <p>
            ${ponerPuntos(precio.toString())}
            <button className="BotonItem">
              <i class="bx bxs-plus-circle"></i>
            </button>
          </p>
        </div>
      </motion.div>
    </NavLink>
  );
}