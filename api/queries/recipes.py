from pydantic import BaseModel
from queries.client import Queries
import requests
from keys import SPOONACULAR_API_KEY



class RecipesIn(BaseModel):
    title: str
    id: int

class RecipesOut(RecipesIn):
    image: str
    servings: int
    readyInMinutes: int
    healthScore: int
    pricePerServing: int
    cheap: bool
    dairyFree: bool
    glutenFree: bool
    instructions: str
    ketogenic: bool
    vegan: bool
    vegetarian: bool
    veryHealthy: bool
    veryPopular: bool
    extendedIngredients: list
    summary: str
    analyzedInstructions: list
    cuisines: list
    diets: list


class RecipesList(BaseModel):
    recipes: list[RecipesIn]


class RecipesRepo(Queries):
    COLLECTION = "recipes"

    def list_recipes(self):
        url = "GET https://api.spoonacular.com/recipes/complexSearch"
        params = SPOONACULAR_API_KEY
        query = "chicken"
        res = requests.get(url, params=params, query=query)
        data = res.json()
        return data["results"]

    def get_recipe_by_id(self, recipe_id:int):
        # url = "https://api.spoonacular.com/recipes/{recipe_id}/information/?apiKey={SPOONACULAR_API_KEY}"
        # res = requests.get(url, params = params)
        # data = res.json()
        # print(data)
        # return data["results"]
        pass