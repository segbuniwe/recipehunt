from pydantic import BaseModel
from queries.client import Queries


class IngredientsIn(BaseModel):
    name: str
    amount: int
    unit: str


class IngredientsOut(IngredientsIn):
    id: str


class IngredientsRepo(Queries):
    COLLECTION = "ingredients"

    def create(self, account_id: str, ingredient: IngredientsIn):
        ingredient["account_id"] = account_id
        response = self.collection.insert_one(ingredient)
        ingredient["id"] = str(response.inserted_id)
        return IngredientsOut(**ingredient)
