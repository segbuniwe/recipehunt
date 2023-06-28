from pydantic import BaseModel
from queries.client import Queries
from typing import List
from bson.objectid import ObjectId


class IngredientsIn(BaseModel):
    name: str
    amount: int
    unit: str


class IngredientsOut(IngredientsIn):
    id: str
    account_id: str


class Ingredients(BaseModel):
    ingredients: List[IngredientsOut]


class IngredientsRepo(Queries):
    COLLECTION = "ingredients"

    def create(self, account_id: str, ingredient: IngredientsIn):
        ingredient["account_id"] = account_id
        self.collection.insert_one(ingredient)
        ingredient["id"] = str(ingredient["_id"])
        return IngredientsOut(**ingredient)

    def get_all_for_account(self, account_id: str):
        results = []
        for ingredient in self.collection.find({"account_id": account_id}):
            ingredient["id"] = str(ingredient["_id"])
            results.append(ingredient)
        return results

    def delete(self, ingredient_id: str, account_id: str):
        result = self.collection.delete_one(
            {
                "_id": ObjectId(ingredient_id),
                "account_id": account_id
            }
        )
        return result.deleted_count > 0

    def update(
            self,
            ingredient_id: str,
            ingredient: IngredientsIn,
            account_id: str
    ):
        updated_ingredient = ingredient
        self.collection.update_one(
            {
                "_id": ObjectId(ingredient_id),
                "account_id": account_id
            },
            {"$set": updated_ingredient}
        )
        updated_ingredient["id"] = ingredient_id
        updated_ingredient["account_id"] = account_id
        return IngredientsOut(**updated_ingredient)
