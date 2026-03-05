"""Schemas for organisation-level features (teams, permissions, etc.)."""

from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class OrganisationBase(BaseModel):
    """Base schema for an organisation."""

    name: str
    display_name: Optional[str] = None
    description: Optional[str] = None


class OrganisationCreate(OrganisationBase):
    """Schema for creating a new organisation."""

    pass


class OrganisationRead(OrganisationBase):
    """Schema returned when reading an organisation."""

    id: int
    member_count: int = 0
    created_at: datetime

    model_config = {"from_attributes": True}


class TeamBase(BaseModel):
    """Base schema for a team within an organisation."""

    name: str
    description: Optional[str] = None
    permission: str = "read"


class TeamCreate(TeamBase):
    """Schema for creating a new team."""

    member_ids: Optional[List[int]] = None


class TeamRead(TeamBase):
    """Schema returned when reading a team."""

    id: int
    org_id: int
    member_count: int = 0
    created_at: datetime

    model_config = {"from_attributes": True}
