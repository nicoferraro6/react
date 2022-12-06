// import React from 'react'
// import { Link, NavLink } from 'react-router-dom';
// import CartWidget from './CartWidget'
// import './NavBar.css'


// const NavBar = () => {
//   return (
//     <div className='menu-navbar-container'>
//         <h1 className='menu-title'>Nike AR</h1>
//         <ul className='menu-items'
//         style={{
//             display:'flex',
//             flexDirection: 'row',
//             listStyle: 'none',
//             width: '400px',
//             justifyContent: 'space-around',
//         }}>
//             <li className='justify'>
//                 <NavLink to="/category/productos" >
//                     Productos
//                 </NavLink>
//             </li>
//             <li className='justify'>
//                 <NavLink to="/category/ofertas" >
//                     Ofertas 
//                 </NavLink>
//             </li>
//             <li>
//                 <Link to="/cart">Carrito</Link>
//             </li>
//         </ul>

// <CartWidget/>
//     </div>
//   )
// }

// export default NavBar

import React, { useState, useEffect } from "react";
import { buscarCategoria } from "../../../Funciones/buscarCategoria";
import { NavLink } from "react-router-dom";
import IconMenu from "../IconMenu/IconMenu";
import IconCart from "../IconCart/IconCart";
import IconSearch from "../IconSearch/IconSearch";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";

import "./NavBar.css";

const variants = {
  open: { x: "190px" },
  closed: { x: "-100px" },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoria, setCategoria] = useState([]);
  useEffect(() => {
    buscarCategoria().then((data) => setCategoria(data));
  }, []);

  return (
    <div className="NavbarContainer">
      <Logo />
      <div className="CategoriasContainer">
        <ul>
          <NavLink to="/productos" className="NavLink">
            <motion.li whileHover={{ scale: 1.1 }}>Productos</motion.li>
          </NavLink>

          {categoria.map((c) => {
            return (
              <NavLink
                to={`/categoria/${c.id}`}
                className="NavLink"
                key={c.nombre}
              >
                <motion.li key={c.id} whileHover={{ scale: 1.1 }}>
                  {c.nombre}
                </motion.li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="CategoriasContainerMobile"
      >
        <ul>
          <NavLink to="/productos" className="NavLink">
            <li>Productos</li>
          </NavLink>

          {categoria.map((c) => {
            return (
              <NavLink
                to={`/categoria/${c.id}`}
                className="NavLink"
                key={c.nombre}
              >
                <li key={c.id}>{c.nombre}</li>
              </NavLink>
            );
          })}
        </ul>
      </motion.div>
      <div className="IconContainer">
        <IconMenu onClick={() => setIsOpen((isOpen) => !isOpen)} />

        <NavLink to="/carrito">
          <IconCart />
        </NavLink>
      </div>
    </div>
  );
}