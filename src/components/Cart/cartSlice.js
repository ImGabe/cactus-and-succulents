import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plants: [
    {
      name: 'succulent-example',
      type: 'succulents',
      value: '20.7',
      image: 'https://i.imgur.com/Uwu8YMk.jpg'
    }
  ]
}

export const ShoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,

  reducers: {
    addToCart: (state, action) => { state.plants.push(action.payload) },
    removeToCart: (state, action) => ({ ...state, plants: state.plants.filter(el => el.name !== action.payload.name) })
  }
})

export const { addToCart, removeToCart } = ShoppingCartSlice.actions
export const selectCartProducts = (state) => state.shoppingCart.plants

export default ShoppingCartSlice.reducer
