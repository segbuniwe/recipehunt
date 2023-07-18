import { useGetFavoritesQuery } from "./app/recipeSlice";
import { useGetAccountQuery } from "./app/apiSlice";

function ProfilePage() {
  const { data: favorites, isLoading } = useGetFavoritesQuery();
  const { data: account } = useGetAccountQuery();
  console.log(favorites);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="container">
        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {favorites.map((favorite) => {
                return (
                  <div key={favorite.id} className="card mb-3 shadow">
                    <img src={favorite.thumbnail_url} class="d-block w-100" />
                    <div className="card-body">
                      <h5 className="card-title">{favorite.name}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
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
      </div>
    </>
  );
}

export default ProfilePage;
