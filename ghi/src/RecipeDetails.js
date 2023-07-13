import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "./app/recipeSlice";

function RecipeDetails() {
  const { recipeId } = useParams();
  const { data, isLoading } = useGetRecipeByIdQuery(recipeId);

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
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </div>
          <div className="col text-end">
            <h3>Instructions</h3>
            <ol>
              <li>Step 1:</li>
              <li>Step 2:</li>
              <li>Step 3:</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
