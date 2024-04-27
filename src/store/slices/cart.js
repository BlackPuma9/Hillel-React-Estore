import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    setInitialState: (state, { payload }) => {
      state.value = payload;
    },
    addToCart: (state) => {
      ++state.value;
    },
    removeFromCart: (state) => {
      --state.value;
    },
  },
});

export const { setInitialState, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
