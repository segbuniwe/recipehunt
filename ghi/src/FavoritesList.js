import { useGetFavoritesQuery, useGetAccountQuery } from "./app/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./style/favoriteslist.css";

function FavoritesList() {
  const { data: favorites, isLoading } = useGetFavoritesQuery();
  const { data: account, isLoading: isAccountLoading } = useGetAccountQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAccountLoading && !account) {
      navigate("/");
    }
  }, [isAccountLoading, account, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1 className="text-center mt-3 mb-3">My Favorites</h1>
      <table className="table table-striped">
        <thead className="text-center">
          <tr>
            <th>Recipe Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite) => {
            return (
              <tr key={favorite.id}>
                <td>
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/recipe/${favorite.recipe_id}`}
                  >
                    {favorite.name}
                  </Link>
                </td>
                <td>
                  <img
                    style={{ width: 200, borderRadius: 10 }}
                    alt="recipe"
                    className="photo"
                    src={favorite.thumbnail_url}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FavoritesList;
