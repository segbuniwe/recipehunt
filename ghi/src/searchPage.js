import { useState, useEffect } from "react";
import { useGetRecipesQuery } from "./app/apiSlice";
import { useDispatch } from "react-redux";
import { reset } from "./app/searchSlice";
import { Link } from "react-router-dom";

function SearchPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetRecipesQuery();
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", search);
    const filteredRecipes = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredList(filteredRecipes);
  };

  useEffect(() => {
    setFilteredList(data);
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col">
          <input
            className="form-control form-control-lg"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-lg btn-success"
            type="submit"
          >
            Search
          </button>
          <button
            className="btn btn-lg btn-link"
            type="button"
            onClick={() => {
              dispatch(reset());
              setSearch("");
              setFilteredList(data);
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <div className="mt-3">
        <h1>
          Recipe List{" "}
          <small className="text-body-secondary">
            {search}
          </small>
        </h1>
        <div className="row mt-3">
          {filteredList && filteredList.length > 0 ? (
            filteredList.map((recipe) => (
              <div key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  {recipe.name}
                </Link>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
