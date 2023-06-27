from fastapi import APIRouter, Depends
from queries.recipes import RecipesList, RecipesOut, RecipesRepo


router = APIRouter()

@router.get("/api/recipes", response_model=RecipesList)
def list_recipes(
    repo: RecipesRepo = Depends()
):
    return repo.list_recipes()

@router.get("/api/recipes/{recipe_id}", response_model=RecipesOut)
def list_one_recipe(recipe_id:int,
                    repo: RecipesRepo = Depends()):
    return repo.get_recipe_by_id(recipe_id)