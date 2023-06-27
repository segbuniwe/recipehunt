from fastapi import APIRouter, Depends
from typing import List

router = APIRouter()

@router.post("/api/accounts/{account_id}/ingredients", response_model=IngredientsOut)


# @router.get("/api/accounts/{account_id}/ingredients", response_model=List[RecipesOut])
