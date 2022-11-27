import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeItem } = cartSlice.actions;
