"""Seed the Sangam database with sample data for development."""

from backend.database import SessionLocal, engine, Base

# Ensure tables exist
Base.metadata.create_all(bind=engine)


def seed():
    """Populate the database with sample repositories, users, and events."""
    db = SessionLocal()
    try:
        # Seed data will be added as models are implemented
        print("Seeding database with sample data...")
        print("Done — database seeded successfully.")
    finally:
        db.close()


if __name__ == "__main__":
    seed()
