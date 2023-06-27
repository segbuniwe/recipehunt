from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import account, recipes

app = FastAPI()

app.include_router(account.router, tags=["account"])
app.include_router(authenticator.router, tags=["auth"])
app.include_router(recipes.router, tags=["recipes"])


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
