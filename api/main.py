from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import account, spoonacular_recipes, tasty_recipes, ingredients

app = FastAPI()

app.include_router(account.router, tags=["accounts"])
app.include_router(authenticator.router, tags=["accounts"])
app.include_router(spoonacular_recipes.router, tags=["spoonacular recipes"])
app.include_router(tasty_recipes.router, tags=["tasty recipes"])
app.include_router(ingredients.router, tags=["personal ingredients"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
