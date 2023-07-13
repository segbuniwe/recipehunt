import { useGetRecipesQuery } from "./app/recipeSlice";

function SearchPage() {
  const { data, isLoading } = useGetRecipesQuery();
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return  data.map((recipe) =>
  <h1>{recipe.title}</h1>);
}

export default SearchPage;
