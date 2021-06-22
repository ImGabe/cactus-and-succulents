import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { removeToCart, selectCartProducts } from './shoppingCartSlice'

import styles from './Cart.module.css'

export function ShoppingCart () {
  const cart = useSelector(selectCartProducts)
  const dispatch = useDispatch()

  const list = cart.map(({ plants, amount }, i) => <li
    key={i}
    onClick={() => dispatch(removeToCart(plants))}>
    {plants.name} = {plants.value}
  </li>)

  return (
    <div>
      <ul className={styles}>
        {list}
      </ul>
    </div>
  )
}
