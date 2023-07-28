# RecipeHunt

# Design

-   [Link to API docs](docs/api.md)

# Intended Market

# Functionality

# Project Initialization

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Create a `.env` file, set the `REACT_APP_API_HOST=http://localhost:8000`,
   set the `SIGNING_KEY="{fastapi environment key}`
4. Get an API key from TastyAPI
5. Create an keys.py under the `api` folder, set it as `TASTY_API_KEY = {tasty api key}`
6. Run `docker volume create recipehunt`
7. Run `docker compose build`
8. Run `docker compose up`
9. Enjoy using recipehunt!
