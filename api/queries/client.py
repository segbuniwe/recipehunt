import os
import pymongo


MONGO_URL = os.environ["DATABASE_URL"]
client = pymongo.MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        db = client["recipehunt"]
        return db[self.COLLECTION]
