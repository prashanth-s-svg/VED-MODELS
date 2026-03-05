"""Sangam backend — FastAPI application entry point."""

import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Sangam API",
    description="Backend API for the Sangam collaborative platform",
    version="0.1.0",
)

ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    """Health-check endpoint."""
    return {"message": "Sangam API is running"}
