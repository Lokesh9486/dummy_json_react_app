import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/ProductSlice";
import { ProductApi } from "../features/ProductApi";
import ProductSlice from "../features/ProductSlice";


export const store = configureStore({
  reducer: {
    product: ProductSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
