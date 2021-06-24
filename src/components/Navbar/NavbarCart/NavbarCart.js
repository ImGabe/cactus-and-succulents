import React from 'react'

import { CgShoppingCart } from 'react-icons/cg'

import { useSelector } from 'react-redux'
import { selectCartProducts } from '../../Cart/cartSlice'

import styleNav from '../Navbar.module.css'
import style from './NavbarCart.module.css'

function NavbarLink () {
  // const dispatch = useDispatch()
  const cart = useSelector(selectCartProducts)
  const list = cart.map((plant) => (
    <div key={plant.name} className={style.item}>
      <a>{plant.name}</a> - {plant.units}
    </div>
  ))

  return (
    <div className={`${styleNav.item} ${styleNav.cart} ${style.dropdown}`}>
      <CgShoppingCart className={style.button} />
      <div className={style.content}>
        { list }
        <a className={style.item}>Quantidade: {cart.length}</a>
      </div>
    </div>
  )
}

export default NavbarLink
