import { useState, useEffect } from "react";
import { useGetRecipesQuery } from "./app/apiSlice";
import { useDispatch } from "react-redux";
import { reset } from "./app/searchSlice";
import { Link, useNavigate } from "react-router-dom";

function SearchPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetRecipesQuery();
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredRecipes = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(filteredRecipes);
  };

  const handleSortSubmit = () => {
    const len = data.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (data[i].name.localeCompare(data[j].name) > 0) {
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
        }
      }
    }
    setFilteredList(data);
  };

  const handleSurpriseSubmit = () => {
    const recipeListLength = data.length;
    let value = Math.random() * recipeListLength;
    const indexValue = Math.floor(value);
    const filteredRecipesID = data[indexValue].id;
    navigate(`/recipe/${filteredRecipesID}`);
  };

  useEffect(() => {
    setFilteredList(data);
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <form className="row" onSubmit={handleSearchSubmit}>
        <div className="col">
          <input
            className="form-control form-control-lg"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-lg btn-success" type="submit">
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
          <button onClick={() => handleSurpriseSubmit()}>Surprise me!</button>
        </div>

        <div>
          <select
            className="form-select"
            onChange={(e) => {
              setSort(e.target.value);
              handleSortSubmit(e.target.value);
            }}
            id="sortSelect"
            value={sort}
          >
            <option value="">Sort by...</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="ingredients">Ingredients</option>
          </select>
        </div>
      </form>
      <div className="mt-3">
        <h1>Recipe List</h1>
        <div className="row mt-3">
          {filteredList && filteredList.length > 0 ? (
            filteredList.map((recipe) => (
              <div key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
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
