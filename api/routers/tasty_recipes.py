from fastapi import APIRouter, Depends
from queries.tasty_recipes import (
    TastyRecipesRepo,
    TastyRecipesOut,
    TastyRecipesList,
)


router = APIRouter()


@router.get("/api/tasty-recipes", response_model=TastyRecipesList)
def list_recipes(
    repo: TastyRecipesRepo = Depends()
):
    return {"recipes": repo.list_recipes_by_name()}


@router.get("/api/tasty-recipes/{recipe_id}", response_model=TastyRecipesOut)
def list_one_recipe(recipe_id: str,
                    repo: TastyRecipesRepo = Depends()):
    return repo.get_recipe_by_id(recipe_id)
