### Log in

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        «key»: type»,
      },
      "token": string
    }
    ```


### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```


### Get one account

* Endpoint path: /accounts/mine
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: Specific logged in user's profile
* Response shape:
    ```json
    {
        {
          "first_name": string,
          "last_name": string,
          "email": string,
          "username": string,
          "password": string,
        }
    }
    ```


### Create a new Account (Sign Up)

* Endpoint path: /accounts
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "first_name": string,
        "last_name": string,
        "email": string,
        "username": string,
        "password": string,
        "hashed_password": string
    }
    ```


### Get a list of Recipes

* Endpoint path: /recipes
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of Recipes
* Response shape:
    ```json
    {
      "recipes": [
        {
          "title": string,
          "image": string,
          "servings": number,
          "readyInMinutes": number,
          "healthScore": number,
          "pricePerServing": number,
          "cheap": boolean,
          "dairyFree": boolean,
          "glutenFree": boolean,
          "instructions": string,
          "ketogenic": boolean,
          "vegan": boolean,
          "vegetarian": boolean,
          "veryHealthy": boolean,
          "veryPopular": boolean,
          "extendedIngredients": list,
          "summary": string,
          "analyzedInstructions": list,
          "cuisines": list,
          "diets": list,
        }
      ]
    }
    ```


### Get a list of Ingredients

* Endpoint path: /accounts/{account_id}/ingredients
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of Ingredients
* Response shape:
    ```json
    {
      "ingredients": [
        {
           "food_item": string,
            "quantity": number,
            "quantity_type": string
        }
      ]
    }
    ```


### Create a new Ingredients

* Endpoint path: /accounts/{account_id}/ingredients
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "food_item": string,
        "quantity": number,
        "quantity_type": string
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean,
      "message": string
    }
    ```

### Update an Ingredient

* Endpoint path: /accounts/{account_id}/ingredients/{ingredient_id}
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "food_item": string,
        "quantity": number,
        "quantity_type": string
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean,
      "message": string
    }
    ```


### Delete an Ingredient

* Endpoint path: /accounts/{account_id}/ingredients/{ingredient_id}
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:

* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean,
      "message": string
    }
    ```


### Get a list of Favorites

* Endpoint path: /accounts/{account_id}/favorites
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of Favorites
* Response shape:
    ```json
    {
      "favorites": [
        {
            "title": string,
            "picture_url": string,
        }
      ]
    }
    ```
