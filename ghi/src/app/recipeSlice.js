import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  endpoints: (builder) => ({
    getRecipeById: builder.query({
      query: (recipeId) => ({
        url: `/api/recipes/${recipeId}`,
        credentials: "include",
      }),
    }),
    getRecipes: builder.query({
      query: () => ({
        url: "/api/recipes/",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetRecipeByIdQuery, useGetRecipesQuery } = recipeApi;
