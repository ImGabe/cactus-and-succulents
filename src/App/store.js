import { configureStore } from '@reduxjs/toolkit'

import CartReducer from '../components/Cart/cartSlice'

export default configureStore({
  reducer: {
    cart: CartReducer
  }
})
