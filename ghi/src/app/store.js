import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { accountApi } from "./apiSlice";
import { recipeApi } from "./recipeSlice";
import { ingredientApi } from "./ingredientSlice";

export const store = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(accountApi.middleware)
      .concat(recipeApi.middleware)
      .concat(ingredientApi.middleware),
});

setupListeners(store.dispatch);
