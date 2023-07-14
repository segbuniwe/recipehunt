6/26/2023

Journal Entry: Today was fairly tough. I felt like I was flying a bit by the seat of my pants. I fell a bit behind last week with the learn modules, so a lot of the work felt like information that I had not gone through before. My partners definitely led the way when it came to the backend authentication portion of this project. I'm going to be working today to catch up on learns so I can provide more use during upcoming days. We got our backend authentication sorted out, and so tomorrow we plan on getting our backend CRUD paths sorted.


6/27/2023

Standup:

    Goals:
    - Build out Recipes and Ingredients Queries and Routes ✅
    - Adjust Account Authentication code ✅
    - Integrate Tasty and Spoonacular API ✅

Journal Entry:

This morning I took over the start of coding for the team. I was in charge of building out the recipes query and router page for spoonacular and adjusting the accounts.py functions. From there. We were not able to get the Spoonacular API to work due to issues with the API website, so Sophia took over and we helped her with building out the Tasty API to make sure we were correctly building out the CRUD functions to pull Tasty API information. We got these to work, and from here we built out the Ingredients router and query pages for the Ingredients collection. We were able to create the Ingredients and connect them to specific profiles that were created. End of day, the Spoonacular API started working again, so we built out GET methods to retrieve information from that API as well.

6/28/2023

Standup:

    Goals:
    - Build out Favorites Queries and Routes ✅
    - Add GET Authentication Token ✅
    - Raise DuplicateAccount Error ✅
    - Depends Favorites (Needed for log in required) ✅
    - Finish up CRUD for Ingredients ✅


Today was a bit more tough for me. Initially Riley went through an Authentication discussion which was very thorough, and from there my group (partiulcarly Sophia) took notes and we were able to make adjustments and have our authentication measures completed quickly. Riley had also gone through creating a Favorites Query and Route in his discussion which was a key component for our website. We had that built out with Sophia covering the main coding part, and we had a strong start. In the afternoon, fatigue hit me pretty hard and I felt like I became a bit quieter in order to understand what was happening. Sophia and Javier took on creating a ratings query and route, and they did a great job with following the bug trail in order to get it to functionally work. It makes sense with how they built it out, but we are going to check if the functionality is correctly formatted with Riley just because the code we have now causes us to fill in a receipe_id vs. automatically pulling it from the recipe collection. We might be pulling that on the front end with hooks and then pulling back the information with the backend.

6/29/2023

Standup:

    Goals:
    - Building out basic of version of main page
    - Building out signup and login pages

6/30/2023

7/10/2023

7/11/2023

Standup:

    Goals:
    - Build out the Frontend Authentication ✅
    - Build out basic version of main page ✅
    - Building out signup and login pages ✅
    - Log in, Sign up, and Log out via frontend ✅


We were able to get a good amount done today after Riley's lectures. We decided to use Redux vs just going to separate States to build out our frontend, and with this we were able to get our login, signup, and logout funtionalities working on the frontend. Sophia took a majority of the day coding while the rest of us observed. We went back through Riley's code sequences to figure out what we needed for our frontend authentication, and we adjusted the initial code that we had in order to build out the authentication functionality. We also built our a basic home page for our routes to route to for logging in, logging out, and signing up.

7/12/2023

Standup:

    Goals:
    - Building the Details Page ✅
    - Ingredients List (Saving for later)
    - Favorites List (Saving for later)

We worked on building out the detail page today. We initially decided to do the details page using useState vs. using Redux, but immediately came to realize that we were going to run into issues with the url for the API. After running back and forth with trying to add the apikey to the .env and trying to pull the list using the url through useState, Sophia and I looked into redux to find that we could use routers to pull data from the backend while utilizing redux and we would not need to call the API url on the frontend. We were able to switch over the redux and get the Details page to pull the our API data by the ID of the recipe we were looking for.

7/13/2023

Standup:

    Goals:
    - Favorites Functionality ✅
    - Search Functionality ✅
    - Build out the Recipes List (on search page) ✅
    - Build out a Search Page(initial) ✅


Today we started off by building out a redux path to pull a list of the recipes from our API using redux for the initial search page. From there, we built out a Search function utilizing useDispatch and useSelector to handle the submit for the search click, grab that returned value, and compare to the list to bring back our filtered list with the search criteria. After this, we moved towards creating the favorities functionality where we utilized our backend favorites functions to pull the recipe_id and add the recipe to our favorites list via a favorites button. We struggled a bit with the favorites button and the unfavorite button because our buttons were not toggling correctly at first once we got the recipe to be added to a favorites list. We spoke with Riley, and he assisted with getting our toggle switch to work by changing the exactness of type were were checking with our filter, and he helped us with the unfavorite button by correcting the the input that we were putting in (initially an objectID when we just needed a string).