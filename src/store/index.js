import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cartReducer from "./slices/cart";
import searchInputReducer from "./slices/searchInput";

export default configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    searchInput: searchInputReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});
