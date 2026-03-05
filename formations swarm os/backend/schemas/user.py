"""Schemas for user registration, login, and profile."""

from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime


class UserBase(BaseModel):
    """Base schema for a user."""

    username: str
    email: EmailStr
    full_name: Optional[str] = None
    bio: Optional[str] = None
    location: Optional[str] = None


class UserCreate(UserBase):
    """Schema for registering a new user."""

    password: str


class UserRead(UserBase):
    """Schema returned when reading a user profile."""

    id: int
    avatar_url: Optional[str] = None
    followers: int = 0
    following: int = 0
    public_repos: int = 0
    badges: Optional[List[str]] = None
    created_at: datetime

    model_config = {"from_attributes": True}


class UserLogin(BaseModel):
    """Schema for user login."""

    username: str
    password: str


class Token(BaseModel):
    """Schema for JWT authentication token response."""

    access_token: str
    token_type: str = "bearer"
