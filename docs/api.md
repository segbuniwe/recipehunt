# Accounts
### Login

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "access_token": string,
      "token_type": string
    }
    ```


### Logout

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```


### Get Token

* Endpoint path: /token
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: Specific logged in user's profile
* Response shape:
    ```json
    {
      "access_token": string,
      "token_type": string,
      "account":
        {
          "id": string,
          "first_name": string,
          "last_name": string,
          "email": string,
          "profile_picture": string
        }
    }
    ```


### Create A New Account (Sign Up)

* Endpoint path: /api/accounts
* Endpoint method: POST

* Request body:
    ```json
    {
        "first_name": string,
        "last_name": string,
        "email": string,
        "password": string,
        "profile_picture": string
    }
    ```

# Recipes
### Get A List Of Recipes

* Endpoint path: /api/tasty-recipes
* Endpoint method: GET

* Response: A list of Recipes
* Response shape:
    ```json
    {
      "recipes": [
        {
          "name": string,
          "id": number,
          "tags": list,
          "original_video_url": string,
          "thumbnail_url": string,
          "num_servings": number,
          "instructions": list,
          "description": string,
          "sections": list,
          "cook_time_minutes": number,
          "prep_time_minutes": number,
          "total_time_minutes": number,
        }
      ]
    }
    ```


### Get One Recipe By ID

* Endpoint path: /api/tasty-recipes/{recipe_id}
* Endpoint method: GET

* Response: A dictionary of one recipe's information
* Response shape:
    ```json
    {
          "name": string,
          "id": number,
          "tags": list,
          "original_video_url": string,
          "thumbnail_url": string,
          "num_servings": number,
          "instructions": list,
          "description": string,
          "sections": list,
          "cook_time_minutes": number,
          "prep_time_minutes": number,
          "total_time_minutes": number,
    }
    ```

# Ingredients
### Get A List Of Ingredients

* Endpoint path: /api/ingredients/mine
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of Ingredients
* Response shape:
    ```json
    {
      "ingredients": [
        {
           "name": string,
           "amount": number,
           "unit": string,
           "id": string,
           "account_id": string,
        }
      ]
    }
    ```


### Create A New Ingredient

* Endpoint path: /api/ingredients
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "name": string,
        "amount": number,
        "unit": string
    }
    ```

* Response: A new dictionary with id and associated account id
* Response shape:
    ```json
    {
      "name": string,
      "amount": number,
      "unit": string,
      "id": string,
      "account_id": string,
    }
    ```

### Update An Ingredient

* Endpoint path: /api/ingredients/{ingredient_id}
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "name": string,
        "amount": number,
        "unit": string
    }
    ```

* Response: A dictionary with the updated values along with the id and associated account id
* Response shape:
    ```json
    {
      "name": string,
      "amount": number,
      "unit": string,
      "id": string,
      "account_id": string,
    }
    ```


### Delete An Ingredient

* Endpoint path: /api/ingredients/{ingredient_id}
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:

* Response: An indication of success or failure
* Response shape:
    ```json
    true
    ```

# Favorites
### Get A List Of Favorites

* Endpoint path: /api/favorites/mine
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of Favorites
* Response shape:
    ```json
    {
      "favorites": [
        {
           "recipe_id": number,
           "name": string,
           "thumbnail_url": string,
           "id": string,
           "account_id": string,
        }
      ]
    }
    ```


### Create A New Favorite

* Endpoint path: /api/favorites
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "recipe_id": number,
        "name": string,
        "thumbnail_url": string,
    }
    ```

* Response: A new dictionary with id and associated account id
* Response shape:
    ```json
    {
      "recipe_id": number,
      "name": string,
      "thumbnail_url": string,
      "id": string,
      "account_id": string,
    }
    ```

### Update A Favorite

* Endpoint path: /api/favorites/{favorite_id}
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "recipe_id": number,
        "name": string,
        "thumbnail_url": string,
    }
    ```

* Response: A dictionary with the updated values along with the id and associated account id
* Response shape:
    ```json
    {
      "recipe_id": number,
      "name": string,
      "thumbnail_url": string,
      "id": string,
      "account_id": string,
    }
    ```


### Delete A Favorite

* Endpoint path: /api/favorites/{favorite_id}
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:

* Response: An indication of success or failure
* Response shape:
    ```json
    true
    ```

# Ratings
### Get List Of All Ratings On A Recipe

* Endpoint path: /api/recipes/{recipe_id}/ratings
* Endpoint method: GET

* Response: A list of all ratings for a specific recipe
* Response shape:
    ```json
    {
      "ratings": [
        {
          "rating": number,
          "comments": string,
          "id": string,
          "account_id": string,
          "recipe_id": string,
          "account_first_name": string,
          "account_last_name": string,
        }
      ]
    }
    ```


### Get List Of Ratings By Account

* Endpoint path: /api/ratings/mine
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of all ratings by account
* Response shape:
    ```json
    {
      "ratings": [
        {
          "rating": number,
          "comments": string,
          "id": string,
          "account_id": string,
          "recipe_id": string,
          "account_first_name": string,
          "account_last_name": string,
        }
      ]
    }
    ```


### Create Rating For A Recipe

* Endpoint path: /api/recipes/{recipe_id}/ratings
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "rating": number,
        "comments": string,
    }
    ```

* Response: A new dictionary with id, associated account id, first name, and last name, and recipe id
* Response shape:
    ```json
    {
      "rating": number,
      "comments": string,
      "id": string,
      "account_id": string,
      "recipe_id": string,
      "account_first_name": string,
      "account_last_name": string,
    }
    ```


### Update Rating

* Endpoint path: /api/ratings/{rating_id}
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "rating": number,
        "comments": string,
    }
    ```

* Response: A dictionary with the updated values along with the id and associated account id
* Response shape:
    ```json
    {
      "rating": number,
      "comments": string,
      "id": string,
      "account_id": string,
    }
    ```
