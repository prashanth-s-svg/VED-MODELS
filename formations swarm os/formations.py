"""Formations — swarm orchestration and formation management."""


def get_formations():
    """Return available formations for the swarm OS."""
    return [
        {"name": "default", "description": "Standard formation"},
        {"name": "distributed", "description": "Distributed formation across nodes"},
        {"name": "clustered", "description": "Clustered formation for high availability"},
    ]


if __name__ == "__main__":
    for formation in get_formations():
        print(f"{formation['name']}: {formation['description']}")
