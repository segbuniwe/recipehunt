from pydantic import BaseModel
from queries.client import Queries
import requests
from keys import TASTY_API_KEY


class TastyRecipesIn(BaseModel):
    name: str


class TastyRecipesOut(TastyRecipesIn):
    id: int


# class TastyRecipesList(BaseModel):
#     recipes: list[TastyRecipesIn]


class TastyRecipesRepo(Queries):
    COLLECTION = "recipes"

    def list_recipes_by_name(self):
        url = "https://tasty.p.rapidapi.com/recipes/list"

        querystring = {
            "from": "0",
            "size": "20",
            "tags": "under_30_minutes"
        }

        headers = {
            "X-RapidAPI-Key": TASTY_API_KEY,
            "X-RapidAPI-Host": "tasty.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)
        data = response.json()
        print(data)
        return data["results"]
