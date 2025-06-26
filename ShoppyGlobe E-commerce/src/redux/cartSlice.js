import { createSlice } from '@reduxjs/toolkit';

const getCartFromLocalStorage = () => {
  const data = localStorage.getItem('cartItems');
  return data ? JSON.parse(data) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: getCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        state.cartItems.push({ ...product, quantity: product.quantity || 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    }
  }
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
