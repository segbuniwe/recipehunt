from fastapi.testclient import TestClient
from main import app
from queries.tasty_recipes import TastyRecipesRepo


client = TestClient(app)


class FakeTastyQueries:
    def list_recipes_by_name(self):
        return [
            {
                "name": "test recipe",
                "id": 1,
                "tags": ["test", "recipe"],
                "thumbnail_url": "hi",
                "num_servings": 1,
                "instructions": [],
                "description": "str",
            },
        ]


def test_list_recipes():
    app.dependency_overrides[TastyRecipesRepo] = FakeTastyQueries

    res = client.get("/api/tasty-recipes")
    data = res.json()

    assert res.status_code == 200
    assert data == [
        {
            "name": "test recipe",
            "id": 1,
            "tags": ["test", "recipe"],
            "thumbnail_url": "hi",
            "video_url": None,
            "num_servings": 1,
            "instructions": [],
            "description": "str",
        }
    ]
