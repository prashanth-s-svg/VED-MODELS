"""Schemas for repository and user discovery / search."""

from pydantic import BaseModel
from typing import Optional, List


class DiscoveryQuery(BaseModel):
    """Schema for a discovery search query."""

    query: str
    language: Optional[str] = None
    tags: Optional[List[str]] = None
    sort_by: str = "stars"
    page: int = 1
    per_page: int = 20


class DiscoveryResult(BaseModel):
    """Schema for a single discovery search result."""

    id: int
    name: str
    owner: str
    description: Optional[str] = None
    language: Optional[str] = None
    stars: int = 0
    forks: int = 0

    model_config = {"from_attributes": True}
