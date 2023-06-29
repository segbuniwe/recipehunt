from pydantic import BaseModel, Field
from queries.client import Queries
from typing import List
from bson.objectid import ObjectId


class RatingIn(BaseModel):
    rating: int = Field(..., ge=1, le=5)


class RatingOut(RatingIn):
    id: str
    account_id: str
    recipe_id: str


class Ratings(BaseModel):
    ratings: List[RatingOut]


class RatingRepo(Queries):
    COLLECTION = "rated_recipes"

    def create_rating(self, account_id: str, rating: RatingIn, recipe_id: int):
        rating["account_id"] = account_id
        rating["recipe_id"] = recipe_id
        self.collection.insert_one(rating)
        rating["id"] = str(rating["_id"])
        return RatingOut(**rating)

    def update_rating(self, account_id: str, rating: RatingIn, rating_id: str):
        updated_rating = rating
        self.collection.update_one(
            {
                "account_id": account_id,
                "_id": ObjectId(rating_id),
            },
            {"$set": updated_rating}
        )
        updated_rating["id"] = rating_id
        updated_rating["account_id"] = account_id
        updated_rating["recipe_id"] = RatingOut["recipe_id"]
        return RatingOut(**updated_rating)
