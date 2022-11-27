import { createSlice } from "@reduxjs/toolkit";
import { CardProps } from "../interface/interfaceCard";

interface IState {
  products: CardProps[];
}

const initialState: IState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );
        itemInCart ? itemInCart.quantity++ : state.products.push({ ...action.payload, quantity: 1 });
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item ? item.quantity++ : null;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find(item => item.id === action.payload);
      if (item) {
        item.quantity = item.quantity === 1 ? 1 : item.quantity -1;
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

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
