from pydantic import BaseModel
from queries.client import Queries

class IngredientsIn(BaseModel):
    name: str
    amount: int
    unit: str

class IngredientsOut(IngredientsIn):
    id: str

class IngredientsRepo(Queries):
    # COLLECTION="ingredients"
    # def create(self, account_id:str):
    pass
