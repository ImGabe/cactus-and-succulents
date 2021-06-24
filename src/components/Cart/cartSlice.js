import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plants: []
}

function _addToCart (state, action) {
  // eslint-disable-next-line no-return-assign
  const found = state.plants.some(plant => (plant.name === action.payload.name) ? plant.units += 1 : false)
  if (!found) state.plants.push({ ...action.payload, units: 1 })
}

function _removeFromCart (state, action) {
  return (action.payload.units < 1)
    ? { ...state, plants: state.plants.map(plant => plant.name === action.payload.name && (plant.units -= 1)) }
    : { ...state, plants: state.plants.filter(el => el.name !== action.payload.name) }
}

export const ShoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,

  reducers: {
    addToCart: _addToCart,
    removeFromCart: _removeFromCart
  }
})

export const { addToCart, removeFromCart } = ShoppingCartSlice.actions
export const selectCartProducts = (state) => state.cart.plants

export default ShoppingCartSlice.reducer
