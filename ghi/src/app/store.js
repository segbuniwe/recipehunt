import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { accountApi } from './apiSlice'
import { recipeApi } from './recipeSlice'
import  searchReducer  from './searchSlice'

export const store = configureStore({
    reducer: {
        [accountApi.reducerPath]: accountApi.reducer,
        [recipeApi.reducerPath]: recipeApi.reducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accountApi.middleware).concat(recipeApi.middleware),
})

setupListeners(store.dispatch);
