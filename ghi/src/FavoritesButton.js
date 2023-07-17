import { useGetFavoritesQuery, useGetRecipeByIdQuery } from "./app/recipeSlice";
import { useEffect, useState } from "react";
import { useFavoritesMutation } from "./app/recipeSlice";
import { useDeleteFavoritesMutation } from "./app/recipeSlice";
import { useParams } from "react-router-dom";

const FavoritesButton = () => {
  const [favorite, setFavorite] = useState(null);
  const { data: favorites } = useGetFavoritesQuery();
  const [addFavorite] = useFavoritesMutation();
  const [deleteFavorite] = useDeleteFavoritesMutation();
  const { recipeId } = useParams();
  const { data: recipe } = useGetRecipeByIdQuery(recipeId);
  console.log(favorites);

  useEffect(() => {
    if (favorites) {
      setFavorite(
        favorites.find((favorite) => favorite.recipe_id === +recipeId) || null
      );
    }
  }, [favorites]);
  return (
    <>
      {!favorite && (
        <button
          className="btn btn-success"
          onClick={() =>
            addFavorite({
              recipe_id: recipeId,
              name: recipe.name,
              thumbnail_url: recipe.thumbnail_url,
            })
          }
        >
          Add to Favorites
        </button>
      )}
      {favorite && (
        <button
          className="btn btn-danger"
          onClick={() => deleteFavorite(favorite.id)}
        >
          Remove from Favorites
        </button>
      )}
    </>
  );
};

export default FavoritesButton;
