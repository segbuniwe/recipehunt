import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
    reducerPath: "recipeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST,
    }),
    endpoints: (builder) => ({
        getRecipeById: builder.query({
            query: (recipeId) => ({
                url: `/api/tasty-recipes/${recipeId}`,
                credentials: "include",
            }),
        }),
        getRecipes: builder.query({
            query: () => ({
                url: "/api/tasty-recipes",
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
        getAllRatings: builder.query({
            query: (recipe_id) => ({
                url: `/api/recipes/${recipe_id}/ratings`,
                credentials: "include",
            }),
            transformResponse: (response) => response.ratings,
            providesTags: ["Ratings"],
        }),
        ratings: builder.mutation({
            query: ({body: body, recipe_id: recipe_id}) => ({
                url: `/api/recipes/${recipe_id}/ratings`,
                method: "POST",
                body,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            invalidatesTags: ["Ratings"],
        }),
    }),
});

export const {
    useGetRecipeByIdQuery,
    useGetRecipesQuery,
    useGetFavoritesQuery,
    useFavoritesMutation,
    useDeleteFavoritesMutation,
    useRatingsMutation,
    useGetAllRatingsQuery,
} = recipeApi;
