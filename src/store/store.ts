import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});