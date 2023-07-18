import { Link } from "react-router-dom";
import IngredientForm from "./IngredientForm";
import {
    useGetAccountQuery,
    useGetFavoritesQuery,
    useGetIngredientByAccountQuery,
    useDeleteIngredientMutation,
} from "./app/apiSlice";
import IngredientEditModal from "./IngredientEditModal";

function ProfilePage() {
    const { data: favorites, isLoading } = useGetFavoritesQuery();
    const { data: account } = useGetAccountQuery();
    const { data: ingredients, isLoading: ingredientsLoading } =
        useGetIngredientByAccountQuery();
    const [deleteIngredient] = useDeleteIngredientMutation();

    if (isLoading || ingredientsLoading) {
        return <p>Loading...</p>;
    }
    return (
      <>
        <h1>Favorites</h1>
        {account && (
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://cdn.thememylogin.com/uploads/edd/2019/03/favorites.png"
                  className="d-block w-100"
                  alt="Favorites"
                />
              </div>
              {favorites.map((favorite) => {
                return (
                  <div className="carousel-item" key={favorite.id}>
                    <div className="card mb-3 shadow">
                      <img
                        src={favorite.thumbnail_url}
                        className="card-img-top"
                        alt={favorite.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {favorite.name}
                        </h5>
                      </div>
                      <Link
                        className="btn btn-info"
                        to={`/recipe/${favorite.recipe_id}`}
                      >
                        Go to Recipe
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}

        <h1>My Ingredients</h1>
        {ingredients.length >= 1 ? (
          <table className="table table-striped">
            <thead>
              <th>Name</th>
              <th>Amount</th>
              <th>Unit</th>
              <th>Remove</th>
              <th>Edit</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient) => {
                return (
                  <tr key={ingredient.id}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.amount}</td>
                    <td>{ingredient.unit}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteIngredient(ingredient.id)}
                      >
                        Remove Ingredient
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target={`#editIngredientModal${ingredient.id}`}
                      >
                        Edit Ingredient
                      </button>
                      <IngredientEditModal ingredient={ingredient} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No ingredients added yet</p>
        )}
        {account ? (
          <div className="text-center mt-3">
            <Link
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              to={`/ingredients`}
            >
              Add an Ingredient
            </Link>
          </div>
        ) : (
          <Link className="btn btn-primary" to={"/login"}>
            Login to add an ingredient
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
                  Add Ingredient
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <IngredientForm />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProfilePage;
