import React from 'react'

import { CgShoppingCart } from 'react-icons/cg'

import style from './NavbarCart.module.css'

function NavbarLink () {
  return (
    <div className={style.dropdown}>
      <CgShoppingCart className={style.button} />
      <div className={style.content}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  )
}

export default NavbarLink
