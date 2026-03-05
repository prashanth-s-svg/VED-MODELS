"""Schemas for comments on repositories, issues, and pull requests."""

from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class CommentBase(BaseModel):
    """Base schema for a comment."""

    body: str


class CommentCreate(CommentBase):
    """Schema for creating a new comment."""

    parent_id: Optional[int] = None


class CommentRead(CommentBase):
    """Schema returned when reading a comment."""

    id: int
    author_id: int
    parent_id: Optional[int] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
