import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipeHuntApi } from "./apiSlice";
import searchSlice from "./searchSlice";


export const store = configureStore({
  reducer: {
    search: searchSlice,
    [recipeHuntApi.reducerPath]: recipeHuntApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(recipeHuntApi.middleware)
});

setupListeners(store.dispatch);
