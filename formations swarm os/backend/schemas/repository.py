"""Schemas for repository CRUD operations."""

from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class RepositoryBase(BaseModel):
    """Base schema for a repository."""

    name: str
    description: Optional[str] = None
    is_private: bool = False
    language: Optional[str] = None
    tags: Optional[List[str]] = None


class RepositoryCreate(RepositoryBase):
    """Schema for creating a new repository."""

    pass


class RepositoryRead(RepositoryBase):
    """Schema returned when reading a repository."""

    id: int
    owner_id: int
    stars: int = 0
    forks: int = 0
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
