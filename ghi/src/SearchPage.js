import { useState, useEffect } from "react";
import {
  useGetRecipesQuery,
  useGetIngredientByAccountQuery,
  useGetAccountQuery,
} from "./app/apiSlice";
import { useDispatch } from "react-redux";
import { reset } from "./app/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import "./style/searchpage.css";

function SearchPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetRecipesQuery();
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  const { data: ingredients } = useGetIngredientByAccountQuery();
  const { data: account, isLoading: isAccountLoading } = useGetAccountQuery();
  const [surpriseRecipe, setSurpriseRecipe] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredRecipes = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(filteredRecipes);
  };

  const handleSortSubmit = (e) => {
    e.preventDefault();
    if (sort === "alphabetical") {
      const copyData = [...filteredList];
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

      if (!ingredientNames || ingredientNames.length === 0) {
        setFilteredList(filteredList);
      } else {
        const recipes = [...filteredList];
        const filteredRecipes = recipes.filter((recipe) =>
          recipe.sections.some((section) =>
            section.components.some((component) =>
              ingredientNames.some((ingredientName) =>
                component.raw_text.toLowerCase().includes(ingredientName)
              )
            )
          )
        );
        const mapped = filteredRecipes.map((recipe) => {
          if (recipe.sections.length > 1) {
            let sum = 0;
            recipe.sections.map((section) => {
              sum += section.components.length;
            });
            return { length: sum, id: recipe.id };
          } else {
            return {
              length: recipe.sections[0].components.length,
              id: recipe.id,
            };
          }
        });

        mapped.sort((a, b) => a.length - b.length);
        const result = mapped.map((v) =>
          filteredRecipes.filter((recipe) => recipe.id == v.id)
        );
        const finalRecipes = result.map((r) => r[0]);
        setFilteredList(finalRecipes);
      }
    }
  };

  const handleSurpriseSubmit = () => {
    const recipeListLength = data.length;
    let value = Math.random() * recipeListLength;
    const indexValue = Math.floor(value);
    const filteredRecipesID = data[indexValue].id;
    setSurpriseRecipe(data.find((recipe) => recipe.id == filteredRecipesID));
  };

  useEffect(() => {
    if (!isAccountLoading && !account) {
      navigate("/");
    }
  }, [isAccountLoading, account, navigate]);

  useEffect(() => {
    setFilteredList(data);
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex-container">
      <div className="header">
        <form className="row g-3 search-form" onSubmit={handleSearchSubmit}>
          <div className="col-12">
            <input
              className="form-control form-control-lg"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search By Name"
            />
          </div>
          <div className="col-m12 text-center">
            <button className="btn btn-sm btn-success" type="submit">
              Search
            </button>
          </div>
        </form>

        <form
          className="d-flex align-items-center mt-3 sort-form"
          onSubmit={handleSortSubmit}
        >
          <select
            className="form-select me-2"
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
          <input
            className="btn btn-light btn-sm mt-2"
            type="submit"
            value="Submit"
          />
        </form>

        <div className="mt-3 reset-form">
          <button
            className="btn btn-sm btn-light me-2 w-75 "
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
        </div>
      </div>

      <div className="recipe-list">
        <h1 className="text-center recipe-title">Recipe List</h1>
        <div className="row mt-3 text-center">
          {filteredList && filteredList.length > 0 ? (
            filteredList.map((recipe) => (
              <div key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                  {recipe.name}
                </Link>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>

      <div className="surprise-section text-center">
        {surpriseRecipe ? (
          <div className="card mb-3 shadow p-3 d-inline-block align-items-center">
            <div className="card-img-container">
              <img
                src={surpriseRecipe.thumbnail_url}
                className="card-img-top"
                alt={surpriseRecipe.name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">{surpriseRecipe.name}</h5>
            </div>
            <div className="card-link-container">
              <Link className="btn btn-info" to={`/recipe/${surpriseRecipe.id}`}>
                Go to Recipe
              </Link>
            </div>
            <button
              className="btn btn-sm btn-primary mt-3"
              onClick={() => handleSurpriseSubmit()}
            >
              Surprise me!
            </button>
          </div>
        ) : (
          <div className="card mb-3 shadow p-3 d-inline-block">
            <div className="card-img-container">
              <img
                src="https://st3.depositphotos.com/2777531/12741/v/950/depositphotos_127410624-stock-illustration-surprise-inscription-with-sunrays.jpg"
                className="card-img-top"
              />
            </div>
            <button
              className="btn btn-sm btn-primary mt-3"
              onClick={() => handleSurpriseSubmit()}
            >
              Surprise me!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
