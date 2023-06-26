from pydantic import BaseModel
from queries.client import Queries
from pymongo import MongoClient


client = MongoClient("mongodb://admin:password@mongo:27017")
db = client["recipehunt"]
collection = db["accounts"]


class DuplicateAccountError(Exception):
    pass


class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountRepo(Queries):
    def get(self, email: str) -> AccountOutWithPassword:
        account = collection.find_one({"email": email})
        account["id"] = str(account["_id"])
        del account["_id"]
        return AccountOutWithPassword(**account)

    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        account = info.dict()
        account["hashed_password"] = hashed_password
        del account["password"]
        response = collection.insert_one(account)
        account["id"] = str(response.inserted_id)
        return AccountOutWithPassword(**account)
