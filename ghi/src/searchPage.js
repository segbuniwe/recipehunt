import { useState, useEffect } from "react";
import { useGetRecipesQuery, useGetIngredientByAccountQuery } from "./app/apiSlice";
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
  const { data: ingredients } = useGetIngredientByAccountQuery();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredRecipes = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(filteredRecipes);
  };

  console.log(sort);

  const handleSortSubmit = (e) => {
    e.preventDefault();
    if (sort === "alphabetical") {
      const copyData = [...filteredList]
      const len = copyData.length;
      for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
          if (copyData[i].name.localeCompare(copyData[j].name) > 0) {
            const temp = copyData[i];
            copyData[i] = copyData[j];
            copyData[j] = temp;
          }
        }
      }
      setFilteredList(copyData);
    } else if (sort === "ingredients") {
      const ingredientNames = ingredients.map((ingredient) =>
        ingredient.name.toLowerCase()
      );
      console.log(ingredientNames);
      if (!ingredientNames || ingredientNames.length === 0) {
        setFilteredList(filteredList);
      } else {
        const recipes = [...filteredList];
        const filteredRecipes = recipes.filter((recipe) =>
          recipe.sections.some((section) =>
          section.components.some((component) =>
            ingredientNames.some((ingredientName) =>
              component.raw_text.toLowerCase().includes(ingredientName))
          )
          ));
        setFilteredList(filteredRecipes);
      }
    }
  }

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
              setSort("");
              setFilteredList(data);
            }}
          >
            Reset
          </button>
          <button className="btn btn-primary" onClick={() => handleSurpriseSubmit()}>Surprise me!</button>
        </div>

        <div>
        </div>
      </form>
      <div>
        <form onSubmit={handleSortSubmit}>
          <select
            className="form-select"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
            id="sortSelect"
          >
            <option value="">Sort by...</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="ingredients">Ingredients</option>
          </select>
          <input className="btn btn-outline-secondary btn-sm" type="submit" value="Submit" />
        </form>
      </div>
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
