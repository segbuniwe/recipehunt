import { useGetFavoritesQuery } from "./app/recipeSlice";
import { useGetFavoritesQuery } from "./app/recipeSlice";
import { useGetAccountQuery } from "./app/apiSlice";
import { Link } from "react-router-dom";

function ProfilePage() {
  const { data: favorites, isLoading } = useGetFavoritesQuery();
  const { data: account } = useGetAccountQuery();
  console.log(favorites);
  console.log(favorites);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>Favorites</h1>
      {account && <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.thememylogin.com/uploads/edd/2019/03/favorites.png" className="d-block w-100" alt="Favorites" />
          </div>
          {favorites.map((favorite) => {
            return (
              <div className="carousel-item">
                <div key={favorite.id} className="card mb-3 shadow">
                  <img src={favorite.thumbnail_url} className="card-img-top" alt={favorite.name}/>
                  <div className="card-body">
                    <h5 className="card-title text-center">{favorite.name}</h5>
                  </div>
                  <Link className="btn btn-info" to={`/recipe/${favorite.recipe_id}`}>Go to Recipe</Link>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>}
    </>
  );
}

export default ProfilePage;
