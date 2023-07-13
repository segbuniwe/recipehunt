import { useGetFavoritesQuery } from "./app/recipeSlice";
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

    useEffect(() => {
        if (favorites) {
            setFavorite(favorites.find((favorite) => favorite.recipe_id === +recipeId) || null);
        }
    }, [favorites]);
    console.log(favorite);
    return (
        <>
            {!favorite && (<button className="btn btn-success"
            onClick={() =>
                addFavorite({
                    recipe_id: recipeId
            })
                }
            >
                Add to Favorites
            </button>)}
            {favorite && (
            <button
            className="btn btn-danger"
            onClick={() =>
                deleteFavorite(favorite.id)
            }
            >Remove from Favorites
            </button>)}
        </>
    );
};

export default FavoritesButton;
