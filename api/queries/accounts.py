from pydantic import BaseModel
from queries.client import Queries


class DuplicateAccountError(ValueError):
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
    COLLECTION = "accounts"

    def get_account(self, email: str) -> AccountOutWithPassword:
        account = self.collection.find_one({"email": email})
        if account is None:
            return None
        account["id"] = str(account["_id"])
        return AccountOutWithPassword(**account)

    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        account = info.dict()
        if self.get_account(account["email"]) is not None:
            raise DuplicateAccountError
        account["hashed_password"] = hashed_password
        del account["password"]
        response = self.collection.insert_one(account)
        account["id"] = str(response.inserted_id)
        return AccountOutWithPassword(**account)
