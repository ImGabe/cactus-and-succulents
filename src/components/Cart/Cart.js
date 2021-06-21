import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart, selectCartProducts } from './shoppingCartSlice'
import styles from './Cart.module.css'

export function ShoppingCart () {
  const cart = useSelector(selectCartProducts)
  const dispatch = useDispatch()

  const list = cart.map(el => <li
    key={el.name}
    onClick={() => dispatch(removeToCart(el))}>
    {el.name} = {el.value}
  </li>)

  return (
    <div>
      <ul className={styles}>
        {list}
      </ul>
    </div>
  )
}
