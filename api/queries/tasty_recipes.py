from pydantic import BaseModel
from queries.client import Queries
import requests
from keys import TASTY_API_KEY
from typing import Optional


class TastyRecipesIn(BaseModel):
    name: str


class TastyRecipesOut(TastyRecipesIn):
    id: int
    # cook_time_minutes: int
    tags: list
    video_url: Optional[str]
    # prep_time_minutes: int
    thumbnail_url: str
    num_servings: int
    instructions: list
    description: str
    # total_time_minutes: int


# class TastyRecipesList(BaseModel):
#     recipes: list[TastyRecipesIn]


class TastyRecipesRepo(Queries):
    COLLECTION = "recipes"

    def list_recipes_by_name(self):
        url = "https://tasty.p.rapidapi.com/recipes/list"

        querystring = {
            "from": "0",
            "size": "20",
            "tags": "under_30_minutes",
        }

        headers = {
            "X-RapidAPI-Key": TASTY_API_KEY,
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        }

        response = requests.get(url, headers=headers, params=querystring)
        data = response.json()
        return data["results"]

    def get_recipe_by_id(self, id: str):
        url = (
            f"https://tasty.p.rapidapi.com/recipes/get-more-info?id={id}"
        )

        headers = {
            "X-RapidAPI-Key": TASTY_API_KEY,
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        }
        res = requests.get(url, headers=headers)
        data = res.json()
        return data
