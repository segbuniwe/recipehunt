import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ingredientApi = createApi({
  reducerPath: "ingredientAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  endpoints: (builder) => ({
    getIngredientByAccount: builder.query({
      query: () => ({
        url: `/api/ingredients/mine`,
        credentials: "include",
      }),
      providesTags: ["Ingredient"],
    }),
    createIngredient: builder.mutation({
      query: (body) => ({
        url: `/api/ingredients`,
        method: "POST",
        body,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Ingredient"],
    }),
    deleteIngredient: builder.mutation({
      query: (ingredient_id) => ({
        url: `/api/ingredients/${ingredient_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Ingredient"],
    }),
    updateIngredient: builder.mutation({
      query: ({ body: body, ingredient_id: ingredient_id }) => ({
        url: `/api/ingredients/${ingredient_id}`,
        body,
        method: "PUT",
        credentials: "include",
      }),
      transformResponse: (response) => response.ratings,
      invalidatesTags: ["Ingredient"],
    }),
  }),
});

export const {
  useGetIngredientByAccountQuery,
  useCreateIngredientMutation,
  useDeleteIngredientMutation,
  useUpdateIngredientMutation,
} = ingredientApi;
