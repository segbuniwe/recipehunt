from pydantic import BaseModel
from queries.client import Queries
import requests
# from keys import TASTY_API_KEY
from typing import Optional, List
import os

api_key = os.environ.get('TASTY_API_KEY')


class TastyRecipesIn(BaseModel):
    name: str


class TastyRecipesOut(TastyRecipesIn):
    id: int
    tags: list
    original_video_url: Optional[str]
    thumbnail_url: str
    num_servings: int
    instructions: list
    description: str
    sections: list
    cook_time_minutes: Optional[int]
    prep_time_minutes: Optional[int]
    total_time_minutes: Optional[int]


class TastyRecipesList(BaseModel):
    recipes: List[TastyRecipesOut]


class TastyRecipesRepo(Queries):
    COLLECTION = "recipes"

    def list_recipes_by_name(self):
        url = "https://tasty.p.rapidapi.com/recipes/list"

        querystring = {
            "from": "0",
            "size": "100",
        }

        headers = {
            "X-RapidAPI-Key": api_key,
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        }

        response = requests.get(url, headers=headers, params=querystring)
        data = response.json()
        return data["results"]

    def get_recipe_by_id(self, id: str):
        url = f"https://tasty.p.rapidapi.com/recipes/get-more-info?id={id}"

        headers = {
            "X-RapidAPI-Key": api_key,
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        }
        res = requests.get(url, headers=headers)
        data = res.json()
        return data
