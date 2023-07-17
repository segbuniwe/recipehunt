from fastapi import APIRouter, Depends
from authenticator import authenticator
from queries.ratings import (
    RatingIn,
    RatingOut,
    RatingRepo,
    RatingOutWithoutRecipeId,
    Ratings
)

router = APIRouter()


@router.post("/api/recipes/{recipe_id}/ratings", response_model=RatingOut)
def create_rating(
    recipe_id: int,
    rating: RatingIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: RatingRepo = Depends(),
):
    account_id = account_data["id"]
    return repo.create_rating(account_id, rating.dict(), recipe_id)


@router.put(
        "/api/ratings/{rating_id}",
        response_model=RatingOutWithoutRecipeId
    )
def update_rating(
    rating: RatingIn,
    rating_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: RatingRepo = Depends(),
):
    account_id = account_data["id"]
    return repo.update_rating(account_id, rating.dict(), rating_id)


@router.get("/api/ratings/mine", response_model=Ratings)
def get_list_by_account(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: RatingRepo = Depends(),
):
    account_id = account_data["id"]
    return {"ratings": repo.get_list_ratings_by_account(account_id)}
