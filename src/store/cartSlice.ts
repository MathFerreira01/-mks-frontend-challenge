import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.products.find(
        (item: { id: number }) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find(
        (item: { id: number }) => item.id === action.payload
      );
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find(
        (item: { id: number }) => item.id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter(
        (item : {id: number}) => item.id !== action.payload
      );
      state.products = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
