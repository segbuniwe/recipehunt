from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import account, tasty_recipes, ingredients, favorites, ratings

app = FastAPI()

app.include_router(account.router, tags=["accounts"])
app.include_router(authenticator.router, tags=["accounts"])
app.include_router(tasty_recipes.router, tags=["tasty recipes"])
app.include_router(ingredients.router, tags=["personal ingredients"])
app.include_router(favorites.router, tags=["personal favorites"])
app.include_router(ratings.router, tags=["personal ratings"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
