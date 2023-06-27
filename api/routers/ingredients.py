from fastapi import APIRouter, Depends
from queries.ingredients import IngredientsRepo, IngredientsIn, IngredientsOut


router = APIRouter()


@router.post("/api/accounts/{account_id}/ingredients", response_model=IngredientsOut)
def create_ingredient(
    ingredient: IngredientsIn,
    account_id: str,
    repo: IngredientsRepo = Depends()
):
    return repo.create(account_id, ingredient.dict())

# @router.get("/api/accounts/{account_id}/ingredients", response_model=List[RecipesOut])
