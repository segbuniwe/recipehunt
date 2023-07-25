import FavoritesButton from "./FavoritesButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import RatingsForm from "./RatingsForm";
import {
  useGetAccountQuery,
  useGetRecipeByIdQuery,
  useGetAllRatingsQuery,
  useGetIngredientByAccountQuery,
} from "./app/apiSlice";

function RecipeDetails() {
  const { recipeId } = useParams();
  const { data, isLoading } = useGetRecipeByIdQuery(recipeId);
  const { data: account, isLoading: isAccountLoading } = useGetAccountQuery();
  const { data: ratings } = useGetAllRatingsQuery(recipeId);
  const { data: ingredients } = useGetIngredientByAccountQuery();
  const navigate = useNavigate();
  function calculateAverage (ratings) {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < ratings.length; i++) {
        sum += ratings[i].rating;
    }
    average = sum / ratings.length;
    return average.toFixed(1);
  }
  const ingredient = (i) => {
    if (ingredients) {
      return ingredients.some((item) =>
        i.toLowerCase().includes(item.name.toLowerCase())
      );
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (!isAccountLoading && !account) {
    navigate("/");
  }
  console.log(ratings)
  return (
    <div className="container">
      <h1 className="text-center mt-3">{data.name}</h1>
      {ratings.length > 0 ? (
        <p className="text-center">{calculateAverage(ratings)}/5</p>
      ) : (
        <p className="text-center">No ratings for this recipe</p>
      )}
      <div className="text-center mt-3">
        <img
          className="img-thumbnail"
          src={data.thumbnail_url}
          alt={data.name}
        />
      </div>
      <div className="row mx-md-n5 mt-5">
        <p className="text-center">{data.description}</p>
      </div>
      <div className="text-center mt-3">
        {account ? (
          <FavoritesButton />
        ) : (
          <Link className="btn btn-primary" to={"/login"}>
            Login to add to favorites
          </Link>
        )}
      </div>
      <div className="mt-4">
        <div className="border border-5 border-success p-4 mb-4 rounded-pill">
          <div className="row">
            <div className="col text-left">
              <p>Ready in Minutes: {data.total_time_minutes}</p>
            </div>
            <div className="col text-end">
              <p>Servings: {data.num_servings}</p>
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
              {data.sections.map((section) =>
                section.components.map((component) => {
                  const ingredientName = component.raw_text;
                  const ingredientInRecipe = ingredient(ingredientName);
                  return (
                    <div key={component.id}>
                      <li
                        className={
                          ingredientInRecipe ? "text-success" : "text-danger"
                        }
                      >
                        {component.raw_text}
                      </li>
                    </div>
                  );
                })
              )}
            </ul>
          </div>
          <div className="col text-end">
            <h3>Instructions</h3>
            <ol>
              {data.instructions.map((step) => (
                <div key={step.id}>
                  <li>{step.display_text}</li>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        {data.original_video_url ? (
          <video width="320" height="240" controls>
            <source src={data.original_video_url} type="video/mp4" />
          </video>
        ) : (
          <p>This video does not exist</p>
        )}
      </div>
      <div className="text-center mt-3">
        <h3>Reviews</h3>
      </div>
      {account ? (
        <div className="text-center mt-5 mb-3">
          <Link
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            to={`/ratings/${recipeId}`}
          >
            Write a review
          </Link>
        </div>
      ) : (
        <Link className="btn btn-primary" to={"/login"}>
          Login to write a review
        </Link>
      )}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Leave Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <RatingsForm />
            </div>
          </div>
        </div>
      </div>
      {ratings.length > 0 ? (
        ratings.map((rating) => {
          return (
            <div key={rating.id}
            className="border border-5 border-success p-4 mb-4">
              <div className="row">
                <div className="col text-left">
                <p>
                    <small>
                    {rating.account_first_name} {rating.account_last_name}
                    </small>
                </p>
                </div>
                <div className="col text-end">
                <p>
                    {rating.rating}/5
                </p>
              </div>
            </div>
            <div className="row">
                <div className="col text-center">
                <p>
                    {rating.comments}
                </p>
            </div>
            </div>
            </div>
          );
        })
      ) : (
        <p className="text-center mt-5">No comments for this recipe</p>
      )}
    </div>
  );
}

export default RecipeDetails;
