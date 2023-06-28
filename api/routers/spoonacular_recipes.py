from fastapi import APIRouter, Depends
from queries.spoonacular_recipes import RecipesOut, RecipeOut, RecipesRepo
from typing import List


router = APIRouter()


@router.get("/api/recipes", response_model=List[RecipesOut])
def list_recipes(
    repo: RecipesRepo = Depends()
):
    return repo.list_recipes()


@router.get("/api/recipes/{recipe_id}", response_model=RecipeOut)
def list_one_recipe(recipe_id: int,
                    repo: RecipesRepo = Depends()):
    return repo.get_recipe_by_id(recipe_id)
