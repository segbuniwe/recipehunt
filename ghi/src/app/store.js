import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipeHuntApi } from "./apiSlice";


export const store = configureStore({
  reducer: {
    [recipeHuntApi.reducerPath]: recipeHuntApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(recipeHuntApi.middleware)
});

setupListeners(store.dispatch);
