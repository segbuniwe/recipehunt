from fastapi import APIRouter, Depends
from queries.tasty_recipes import TastyRecipesRepo, TastyRecipesOut
from typing import List


router = APIRouter()


@router.get("/api/tasty-recipes", response_model=List[TastyRecipesOut])
def list_recipes(
    repo: TastyRecipesRepo = Depends()
):
    return repo.list_recipes_by_name()


# @router.get("/api/recipes/{recipe_id}", response_model=RecipesOut)
# def list_one_recipe(recipe_id:int,
#                     repo: RecipesRepo = Depends()):
#     return repo.get_recipe_by_id(recipe_id)
