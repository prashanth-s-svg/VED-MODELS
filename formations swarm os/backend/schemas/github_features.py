"""Schemas for GitHub-compatible features (issues, PRs, actions, etc.)."""

from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class IssueBase(BaseModel):
    """Base schema for an issue."""

    title: str
    body: Optional[str] = None
    labels: Optional[List[str]] = None


class IssueCreate(IssueBase):
    """Schema for creating a new issue."""

    pass


class IssueRead(IssueBase):
    """Schema returned when reading an issue."""

    id: int
    number: int
    state: str = "open"
    author_id: int
    repository_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class PullRequestBase(BaseModel):
    """Base schema for a pull request."""

    title: str
    body: Optional[str] = None
    head_branch: str
    base_branch: str = "main"


class PullRequestCreate(PullRequestBase):
    """Schema for creating a new pull request."""

    pass


class PullRequestRead(PullRequestBase):
    """Schema returned when reading a pull request."""

    id: int
    number: int
    state: str = "open"
    author_id: int
    repository_id: int
    mergeable: bool = True
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
