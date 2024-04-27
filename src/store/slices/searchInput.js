import { createSlice } from "@reduxjs/toolkit";

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState: {
    value: "",
  },
  reducers: {
    setInitialSearchInputState: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setInitialSearchInputState } = searchInputSlice.actions;

export default searchInputSlice.reducer;
