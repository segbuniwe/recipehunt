from fastapi import APIRouter, Depends
from queries.ingredients import (
    IngredientsRepo,
    IngredientsIn,
    IngredientsOut,
    Ingredients
)
from authenticator import authenticator

router = APIRouter()


@router.post("/api/ingredients", response_model=IngredientsOut)
def create_ingredient(
    ingredient: IngredientsIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: IngredientsRepo = Depends()
):
    account_id = account_data["id"]
    return repo.create(account_id, ingredient.dict())


@router.get("/api/ingredients/mine", response_model=Ingredients)
def list_ingredients_for_current_account(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: IngredientsRepo = Depends()
):
    account_id = account_data["id"]
    return {
        "ingredients": repo.get_all_for_account(account_id)
    }


@router.delete("/api/ingredients/{ingredient_id}")
def delete_ingredient(
    ingredient_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: IngredientsRepo = Depends()
):
    return repo.delete(
        ingredient_id=ingredient_id,
        account_id=account_data["id"]
    )


@router.put("/api/ingredients/{ingredient_id}", response_model=IngredientsOut)
def update_ingredient(
    ingredient: IngredientsIn,
    ingredient_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: IngredientsRepo = Depends()
):
    return repo.update(
        ingredient_id=ingredient_id,
        ingredient=ingredient.dict(),
        account_id=account_data["id"]
    )
