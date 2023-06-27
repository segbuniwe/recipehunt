from pydantic import BaseModel
from queries.client import Queries
import requests
from keys import SPOONACULAR_API_KEY


class RecipesIn(BaseModel):
    title: str


class RecipesOut(RecipesIn):
    id: int
    # image: str
    # servings: int
    # readyInMinutes: int
    # healthScore: int
    # pricePerServing: int
    # cheap: bool
    # dairyFree: bool
    # glutenFree: bool
    # instructions: str
    # ketogenic: bool
    # vegan: bool
    # vegetarian: bool
    # veryHealthy: bool
    # veryPopular: bool
    # extendedIngredients: list
    # summary: str
    # analyzedInstructions: list
    # cuisines: list
    # diets: list


# class RecipesList(BaseModel):
#     recipes: list[RecipesIn]


class RecipesRepo(Queries):
    COLLECTION = "recipes"

    def list_recipes(self):
        url = "GET https://api.spoonacular.com/recipes/complexSearch"
        params = SPOONACULAR_API_KEY
        query = "chicken"
        res = requests.get(url, params=params, query=query)
        data = res.json()
        return data["results"]
