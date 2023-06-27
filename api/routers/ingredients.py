from fastapi import APIRouter, Depends
from queries.ingredients import IngredientsRepo, IngredientsIn, IngredientsOut
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

# @router.get("/api/accounts/{account_id}/ingredients", response_model=List[RecipesOut])
