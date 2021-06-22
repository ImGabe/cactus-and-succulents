import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plants: [],
  amount: 0
}

export const ShoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,

  reducers: {
    addToCart: (state, action) => { state.plants.push(action.payload); state.amount += 1 },
    removeFromCart: (state, action) => ({ ...state, plants: state.plants.filter(el => el.name !== action.payload.name) })
  }
})

export const { addToCart, removeFromCart } = ShoppingCartSlice.actions
export const selectCartProducts = (state) => state.cart

export default ShoppingCartSlice.reducer
