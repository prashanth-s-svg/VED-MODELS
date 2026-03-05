"""Lightweight seed script — populates minimal data without full ORM models."""

import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "sangam.db")


def simple_seed():
    """Create tables and insert minimal sample rows using raw SQL."""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            full_name TEXT,
            location TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """
    )

    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS repositories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            owner_id INTEGER NOT NULL,
            language TEXT,
            stars INTEGER DEFAULT 0,
            forks INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (owner_id) REFERENCES users(id)
        )
        """
    )

    # Insert sample users
    sample_users = [
        ("prashanth_dev", "prashanth@example.com", "Prashanth Dev", "Bangalore"),
        ("digital_bharat", "digital@example.com", "Digital Bharat", "Delhi"),
        ("mumbai_coder", "mumbai@example.com", "Mumbai Coder", "Mumbai"),
    ]
    cur.executemany(
        "INSERT OR IGNORE INTO users (username, email, full_name, location) VALUES (?, ?, ?, ?)",
        sample_users,
    )

    # Insert sample repositories
    sample_repos = [
        ("VED-MODELS", "Neural network models for student performance prediction", 1, "Python", 482, 97),
        ("indiastack-sdk", "Unified SDK for IndiaStack APIs", 2, "Python", 1243, 318),
        ("namaste-react", "React component library with Indian design patterns", 3, "TypeScript", 3871, 642),
    ]
    cur.executemany(
        "INSERT OR IGNORE INTO repositories (name, description, owner_id, language, stars, forks) VALUES (?, ?, ?, ?, ?, ?)",
        sample_repos,
    )

    conn.commit()
    conn.close()
    print(f"Simple seed complete — data written to {DB_PATH}")


if __name__ == "__main__":
    simple_seed()
