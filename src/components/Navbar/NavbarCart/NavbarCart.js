import React from 'react'

import { CgShoppingCart } from 'react-icons/cg'

import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, selectCartProducts } from '../../Cart/cartSlice'

import styleNav from '../Navbar.module.css'
import style from './NavbarCart.module.css'

function NavbarLink () {
  const dispatch = useDispatch()
  const cart = useSelector(selectCartProducts)

  const list = cart.plants.map((plant, i) => (
    <div
      key={i}
      onClick={() => dispatch(removeFromCart(plant.name))}>
      <a className={style.item} key={i}>{plant.name}</a>
    </div>
  ))

  return (
    <div className={`${styleNav.item} ${style.dropdown}`}>
      <CgShoppingCart className={style.button} />
      <div className={style.content}>
        { list }
        <a>Quantidade: { cart.amount }</a>
      </div>
    </div>
  )
}

export default NavbarLink
