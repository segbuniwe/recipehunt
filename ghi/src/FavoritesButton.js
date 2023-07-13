import { useGetFavoritesQuery } from "./app/recipeSlice";
import { useEffect, useState } from "react";
import { useFavoritesMutation } from "./app/recipeSlice";
import { useDeleteFavoritesMutation } from "./app/recipeSlice";

const FavoritesButton = (props) => {
    const [favorite, setFavorite] = useState(null);
    const { data: favorites } = useGetFavoritesQuery();
    const [addFavorite] = useFavoritesMutation();

    useEffect(() => {
        if (favorites) {
            setFavorite(favorites.find((favorite) => favorite.id === props.id) || null);
        }
    }, [favorites]);
    console.log(favorites)
    return (
        <>
            {!favorite && (<button className="btn btn-success"
            onClick={() =>
                addFavorite({
                    recipe_id: favorites[0].recipe_id,
                })
                }
            >
                Add to Favorites
            </button>)}
            {favorite && (
            <button
            className="btn btn-danger"
            onClick={useDeleteFavoritesMutation}
            >Remove from Favorites
            </button>)}
        </>
    );
};

export default FavoritesButton;
