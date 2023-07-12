import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "./app/recipeSlice";

function RecipeDetails() {
    const { recipeId } = useParams();
    const { data, isLoading } = useGetRecipeByIdQuery(recipeId);

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <h1>{data.title}</h1>
    );
}

export default RecipeDetails;
