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
        getFavorites: builder.query({
            query: () => ({
                url: "/api/favorites/mine",
                credentials: "include",
            }),
            transformResponse: (response) => response.favorites,
            providesTags: ["Favorites"],
        }),
        favorites: builder.mutation({
            query: (body) => ({
                url: `/api/favorites`,
                method: "POST",
                body,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            invalidatesTags: ["Favorites"],
        }),
        deleteFavorites: builder.mutation({
            query: (favorite_id) => ({
                url: `/api/favorites/${favorite_id}`,
                method: "DELETE",
                credentials: "include",
            }),
            invalidatesTags: ["Favorites"],
        }),
    }),
});

export const {
    useGetRecipeByIdQuery,
    useGetRecipesQuery,
    useGetFavoritesQuery,
    useFavoritesMutation,
    useDeleteFavoritesMutation,
} = recipeApi;