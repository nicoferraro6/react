import React from 'react'
import logo from '../assets/logo.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='manu_navbar__logo'>
        <img className='menu-navbar__img' src={logo} alt="cart widget"></img>

    </div>
  )
}

export default CartWidget