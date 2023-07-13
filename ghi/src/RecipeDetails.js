import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "./app/recipeSlice";
import FavoritesButton from "./FavoritesButton";
import { useGetAccountQuery } from "./app/apiSlice";
import { Link } from "react-router-dom";

function RecipeDetails() {
  const { recipeId } = useParams();
  const { data, isLoading } = useGetRecipeByIdQuery(recipeId);
  const { data: account } = useGetAccountQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <h1 className="text-center mt-3">{data.title}</h1>
      <p className="text-center">Rating/Stars Goes Here</p>
      <div className="text-center mt-3">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="row mx-md-n5 mt-5">
        <p className="text-center">Summary Goes here</p>
      </div>
      <div className="text-center mt-3">
        {account ? <FavoritesButton /> : <Link to={"/login"}>Login to add to favorites</Link>}
      </div>
      <div className="mt-4">
        <div className="border border-primary p-3">
          <div className="row">
            <div className="col text-left">
              <p>Ready in Minutes: {data.readyInMinutes}</p>
            </div>
            <div className="col text-end">
              <p>Servings: {data.servings}</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-left">
              <p>whatever you want here </p>
            </div>
            <div className="col text-end">
              <p>Whatever you want here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col">
            <h3>Ingredients</h3>
            <ul>
              { data.extendedIngredients.map((ingredient) => (
                <li>{ingredient.original}</li>
              ))}
            </ul>

          </div>
          <div className="col text-end">
            <h3>Instructions</h3>
            <ol>
              { data.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="text-center mt-3">
        <h3>Reviews</h3>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary">Write a review</button>
      </div>
    </div>
  );
}

export default RecipeDetails;
