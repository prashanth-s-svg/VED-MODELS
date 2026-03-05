"""Schemas for Sangam-exclusive features (Indian-community-specific)."""

from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class StateSpotlight(BaseModel):
    """Spotlight entry for an Indian state developer community."""

    state: str
    developer_count: int = 0
    top_languages: Optional[List[str]] = None


class HackathonBase(BaseModel):
    """Base schema for a hackathon event."""

    title: str
    description: Optional[str] = None
    location: Optional[str] = None
    start_date: datetime
    end_date: datetime


class HackathonCreate(HackathonBase):
    """Schema for creating a new hackathon."""

    pass


class HackathonRead(HackathonBase):
    """Schema returned when reading a hackathon."""

    id: int
    organiser_id: int
    participant_count: int = 0
    created_at: datetime

    model_config = {"from_attributes": True}


class DigitalIndiaProject(BaseModel):
    """Schema for a Digital India spotlight project."""

    name: str
    description: Optional[str] = None
    icon: Optional[str] = None
    url: Optional[str] = None
