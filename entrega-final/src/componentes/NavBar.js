import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <h1 className='menu-title'>Nike AR</h1>
        <ul className='menu-items'
        style={{
            display:'flex',
            flexDirection: 'row',
            listStyle: 'none',
            width: '400px',
            justifyContent: 'space-around',
        }}>
            <li className='justify'>
                <NavLink to="/category/productos" >
                    Productos
                </NavLink>
            </li>
            <li className='justify'>
                <NavLink to="/category/ofertas" >
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