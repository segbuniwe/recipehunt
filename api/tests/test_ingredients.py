from fastapi.testclient import TestClient
from main import app
from queries.ingredients import IngredientsRepo, IngredientsIn
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {
        "id": "1234",
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "Person",
    }


class FakeIngredientsQueries:
    def create(self, account_id: str, ingredient: IngredientsIn):
        ingredient["id"] = "98765"
        ingredient["account_id"] = account_id
        return ingredient


def test_create_ingredient():
    app.dependency_overrides[IngredientsRepo] = FakeIngredientsQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    ingredient_in = {
        "name": "thyme",
        "amount": 2,
        "unit": "teaspoons",
    }

    res = client.post("/api/ingredients", json=ingredient_in)
    data = res.json()

    assert data == {
        "id": "98765",
        "account_id": "1234",
        "name": "thyme",
        "amount": 2,
        "unit": "teaspoons",
    }
    assert res.status_code == 200
