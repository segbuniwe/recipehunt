import { useGetFavoritesQuery, useGetRecipeByIdQuery } from "./app/recipeSlice";
import { useGetAccountQuery } from "./app/apiSlice";
import { useEffect, useState } from "react";

function ProfilePage() {
  const { data: favorites, isLoading } = useGetFavoritesQuery();
  const { data: account } = useGetAccountQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {favorites.map((favorite) => {
          return (
            <div className="carousel-item active">
              <img
                src={favorite.thumbnail_url}
                className="d-block w-100"
                alt={favorite.name}
              />
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ProfilePage;
