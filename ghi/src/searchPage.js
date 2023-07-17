import { useState } from "react";
import { useGetRecipesQuery } from "./app/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { reset, filter } from "./app/searchSlice";
import { Link } from "react-router-dom";

function SearchPage() {
    const [search, setSearch] = useState("");
    const searchCriteria = useSelector((state) => state.search);
    const { data, isLoading } = useGetRecipesQuery();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit", search);
        dispatch(filter(search));
    };

    const filteredRecipes = () => {
        if (searchCriteria) {
            return data.filter((recipe) =>
                recipe.name.toLowerCase().includes(searchCriteria)
            );
        } else {
            return data;
        }
    };

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
                    <button className="btn btn-lg btn-success" type="submit">
                        Search
                    </button>
                    <button
                        className="btn btn-lg btn-link"
                        type="button"
                        onClick={() => {
                            dispatch(reset());
                            setSearch("");
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
                        {searchCriteria}
                    </small>
                </h1>
                <div className="row mt-3">
                    {filteredRecipes().map((recipe) => {
                        return (
                            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                                {recipe.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default SearchPage;
