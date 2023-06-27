from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import account, spoonacular_recipes, tasty_recipes

app = FastAPI()

app.include_router(account.router, tags=["account"])
app.include_router(authenticator.router, tags=["auth"])
# app.include_router(spoonacular_recipes.router, tags=["spoonacular recipes"])
app.include_router(tasty_recipes.router, tags=["tasty recipes"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
