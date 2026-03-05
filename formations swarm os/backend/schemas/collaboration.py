"""Schemas for collaboration features (pull requests, code reviews, etc.)."""

from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class CollaborationBase(BaseModel):
    """Base schema for a collaboration item."""

    title: str
    description: Optional[str] = None
    repository_id: int


class CollaborationCreate(CollaborationBase):
    """Schema for creating a new collaboration item."""

    pass


class CollaborationRead(CollaborationBase):
    """Schema returned when reading a collaboration item."""

    id: int
    author_id: int
    status: str = "open"
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
