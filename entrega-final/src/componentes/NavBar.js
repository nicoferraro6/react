import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <h1 className='menu-title'>Nike AR</h1>
        <ul className='menu-items'>
            <li className='justify'>
                <NavLink to="/" >
                    Productos 
                </NavLink>
            </li>
            <li className='justify'>
                <NavLink to="/:ofertas" >
                    Ofertas 
                </NavLink>
            </li>
            <li>
                <Link to="/cart">Carrito</Link>
            </li>
        </ul>

<CartWidget/>
    </div>
  )
}

export default NavBar