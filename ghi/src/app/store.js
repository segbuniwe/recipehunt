import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { accountApi } from "./apiSlice";
import { recipeApi } from "./recipeSlice";

export const store = configureStore({
    reducer: {
        [accountApi.reducerPath]: accountApi.reducer,
        [recipeApi.reducerPath]: recipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(accountApi.middleware)
            .concat(recipeApi.middleware),
});

setupListeners(store.dispatch);
