# Data Models

## Accounts Pydantic Models

### Account In
| name | type |
| -------- | -------- |
| email | string |
| password | string |
| first_name | string |
| last_name | string |
| profile_picture | Optional string |

The `Account In` model shows all the information a user will input to create an account. The `profile_picture` is denoted as `Optional` so a user can still create an account without it, though everything else is required.

### Account Out With Hashed Password
| name | type |
| -------- | -------- |
| id | string |
| email | string |
| first_name | string |
| last_name | string |
| profile_picture | Optional string |
| hashed_password | string |

The `Account Out` model shows what will be returned to the database after successful creation of an account. The `password` is removed and replaced with a `hashed_password` for protection.

## Favorites Pydantic Models

### Favorites In
| name | type |
| -------- | -------- |
| recipe_id | integer |
| name | string |
| thumbnail_url | string |

The `Favorites In` model takes in these input values to assign a recipe as a user's favorite.

### Favorites Out
| name | type |
| -------- | -------- |
| recipe_id | integer |
| name | string |
| thumbnail_url | string |
| id | string |
| account_id | string |

The `Favorites Out` model shows what will be returned to the database after successful favoriting of a recipe. The new favorite will now be associated with a specific `account_id`.

## Ingredients Pydantic Models

### Ingredients In
| name | type |
| -------- | -------- |
| name | string |
| amount | integer |
| unit | Optional string |

The `Ingredients In` model takes in these input values from a user so it can be used to form a user's ingredients list.

### Ingredients Out
| name | type |
| -------- | -------- |
| name | string |
| amount | integer |
| unit | Optional string |
| id | string |
| account_id | string |

The `Ingredients Out` model shows what will be returned to the database after successful creation of an ingredient. The new ingredient will now be associated with a specific `account_id`.

## Ratings Pydantic Models

### Ratings In
| name | type |
| -------- | -------- |
| rating | integer 1-5  |
| comments | string |

The `Ratings In` model takes in these input values from a user so it can be used to form a user's review for a recipe.

### Ratings Out
| name | type |
| -------- | -------- |
| rating | integer 1-5  |
| comments | string |
| id | string |
| account_id | string |
| recipe_id | string |
| account_first_name | string |
| account_last_name | string |

The `Ratings Out` model shows what will be returned to the database after successful creation of a rating/review. The new rating will now be associated with a specific `account_id, account_first_name, and account_last_name`, which can be displayed on the frontend. The rating will also be associated with the specific recipe it was made for by the `recipe_id`.

### Ratings Out Without Recipe ID
| name | type |
| -------- | -------- |
| rating | integer 1-5  |
| comments | string |
| id | string |
| account_id | string |

The `Ratings Out Without Recipe ID` model shows what will be returned to the database after successful creation of a rating/review as well. This model can be used specifically to showcase all the ratings a user has ever left regardless of the recipe.

## Tasty Recipes Pydantic Models

### Tasty Recipes In
| name | type |
| -------- | -------- |
| name | string  |

### Tasty Recipes Out
| name | type |
| -------- | -------- |
| name | string  |
| id | integer |
| tags | list |
| original_video_url | Optional string |
| thumbnail_url | string |
| num_servings | integer |
| instructions | list |
| description | string |
| sections | list |
| cook_time_minutes | Optional integer |
| prep_time_minutes | Optional integer |
| total_time_minutes | Optional integer |

The `Tasty Recipes Out` model shows all of the relevant data that will be received from the TastyAPI. Some values are `Optional` since not all recipes have every single parameter.
