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

We decided that we were going to move towards building out the signup page.

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

7/14/2023

Standup:

    Goals:
    - Unit Tests (individual commits) ✅
    - Tasty API backend ✅

Today all four of us worked on getting a unit test created. We each took turns at the wheel working on creating a unit test: Javier did the test for the Tasty list test, Sophia did the create for ingredients, I did the test for listing ingredients, and David took over the test for deleting an ingredient. From there, we realized that we did not like how our API pictures were looking, so we decided to change the API we were using to the Tasty API. We had the list recipes query and router done, but we needed to do the get recipe by ID query and router. David took over doing the backend while we helped him through getting that finished up, and we were able to pull the data by EoD.

7/17/2023

Standup:

    Goals:
    - Replace Spoonacular with Tasty ✅
    - Reviews on the backend ✅
    - Ratings and Reviews on the Details Page ✅
    - Profile Page (Favorites List and Ingredients List, add Ingredients Form)

We started off today by working to replace the Spoonacular API with the Tasty API on the frontend. We were working on adjusting all of the different variables and changing the calls based off the array that was in the recipe by id information (shout out to Javier for his amazing work with figuring out the nested loop to access ingredients that were in different components in the API). David took charge of doing this. Once we got this completed, we moved onto creating reviews and ratings for our webpage where Sophia took charge. We started off on getting the backend for reviews completed by adding comments as a str variable on the backend. Once we finsihed this, we were working to get all ratings and reviews to show on a recipe regardless of the person writing the review. We were able to gain a list of ratings and reviews regardless of the the account by connecting it with the account_id, so you can only write a review with an account. From here, we went back to backend to add a first name and last name that we pulled from the authenticator to populate the person's name that wrote the review. We built out a modal for the ratings and review form that pops up when someone wants to write a review, and it autopopulates to the page once it is written. We are going to figure out a way for the modal to close once the review is finished, but we decided to save this for later. At the end of the day, we started the profile page that we wanted to create. We initially wanteed to figure out a way to grab the picture URL and the name of the recipe that was favorited in order to build out a carousel of recipes that were favorited based off the profule. We struggled a bit as we were trying to utilize props since we were not calling that information on the backend, but we struggled with this approach and decided to add these variables to the backend and information going in, and then we assigned it to those variables in the create a favorite by grabbing the recipe name and picture URL from the get recipe by ID query. We are still working on getting the carousel finished, but we were able to pull that information to grab a list of favorites with name and picture URL included.

7/18/2023

Standup:

    Goals:
    - Profile Page (Ingredients List and Form/Modal) ✅
    - Search Page (by Ingredients List)

Today we focused on building out the profile page. We started with Sophia crushing it and figuring out how to get the carousel to work by adding an extra image to stand as the "active" image in order for the carousel to scroll through. After this, we went on to work on an ingredients list for our profile page. Sophia was initially noticing issues with the carousel when a user were to log in and out, but after we spoke with Riley he let us know that we should not have our different api slices in different folders because that would cause issues around loadability and connections to different parts of the website, Javier took over and we consolidated all of the slices into one apiSlice file. I took over to work on building out the ingredients list and adding an ingredient to the list of ingredients building it out as a modal that pops out vs. building the form in a new page. David took over afterwards and worked on the delete and edit buttons for the ingredients list. We were struggling with getting this functionality, but after speaking with Riley we were able to get both buttons working properly.

7/19/2023

Standup:

    Goals:
    - Search Page - Sort Functions (Alphabetical) ✅
    - Surprise Me Function on Search Page ✅

7/20/2023

We decided to work on building out some functionality on the search page today. Sophia initially took over screen sharing to deal with some errors that we were having with some features, and after this David took over coding. We talked him through creating a surprise me functionality on the website that allows for a button click to navigate to a random receipe details page. Once we got this functionality to work, I took over coding to get a sort function build to alphabetically sort our recipe list. We decided to start with building out the alphabetical funciontality before sorting by the ingredients because we knew it was going to be a tough challenge to do the latter vs. the former. We initially tried creating the functionality to where the sort menu would sort based off selecting the alphabetical function in the sort drop down, but we were struggling with this functionality, so we change it a button that worked of an onClick function instead. We were also having trouble with the .sort function which trying to sort using the .sort(a,b) method. We eventually decided to just change it to a bubble sort since we had just had a lesson to get it sorted that way.

Standup:

    Goals:
    - Search Page - Sort Functions (Ingredients List) ✅

Today was a bit rough. We spent a lot of time working to get the sort function for the ingredients page. Sophia came in crushing it by figuring out how to sort the recipe page and filter it based off ingredients that were in our ingredients list. The issue was that the filtered list would not sort those ingredients in any way, so a recipe could have one ingredient or 4-5 ingredients and the list would not sort the ingredients based off the amount of ingredients. We worked to try to add a "counter" function to map through the recipe page and then map through ingredients and add a count to each recipe based off the amount of ingredients that were in the list. We were having a lot of issues with this, so we spoke with Michael, and he said we should create a separate dictionary to hold that counter along with an id for the recipe we were on, but we struggled with getting the dictionary to link with the recipes. Once we finally got them linked, we noticed that our counter function was not working well, and we finally decided to take a break to work on this going into next week. It was a big struggle day overall.

7/24/2023

Standup:

We decided to use this day to study on our own. I focused in on learning more about bootstrap CSS to get better prepared for the week.

7/25/2023

Standup:

    Goals:
    - Fixed Rating System ✅
    - Bootstrap for ratings and reviews ✅
    - Added Favorites List ✅
    - Added redirects for logout to home page ✅
    - Added video backdrop ✅

Today we worked to start adding CSS into our website. Sophia started off by adding navigation functions for if a user gets logged to so that the website redirects to the home page. From here, Javier and Sophia each worked on coding to get the ratings system working to create an average of the ingredients at the top and build out the CSS for the reviews at the bottom of each recipe details page. We also worked to add a favorites list under a My Favorites tab. This is just a list of favorites that allows a user to click on the name and redirect directly to that specific recipe. At the end of the day, Javier took over and we worked on adding a video backdrop as our home page screen. We found a good video backdrop on adobe and Javier was able to figure out how to add that as our backdrop for our home page.

7/26/2023

Standup:

    Goals:
    - Adjustments to NavBar ✅
    - Build out Home Page
    - Fix Ingredients List Search ✅
    - Add concrete backdrop across
    - Add About Us page
    - Created a Surprise Me Card ✅

Today we continued to focus on CSS for the page. Before this though, we were having one error message continuously popping up, so we asked Riley if he could assist with this error and he pointed out that we have an AuthProvider tag on our App page that was causing that error. From there, we chatted with him about our idea for the search page to sort by filter and sort by ingredients. We decided to sort our list by the recipe ingredients list length vs. the amount of ingredients that matched with the recipe list ingredients. Sophia and I worked to implement this, and once we finished all of us worked on building out the CSS. Javier and Sophia took over the screen while working on building out the backdrops to match the video backdrop on the front page for the rest of the website, and then Sophia took over coding for the surprise me button card which we built out. At the end of the day , assisted with getting the picture sizing for the surprise me button sorted so we could have it lined up and and consistent across each recipe.

7/27/2023

Standup:

    Goals:
    - Check through website code for code cleanliness ✅
    - Add About Us Page ✅
    - Fix CSS for Profile Page, Search Page, and Recipe Details ✅
    - Add more features for Home Page ✅

Today, I started off by screening sharing as the group went through all the code to make sure that we were following rubric instructions for code cleanliness. We decided to move our css sheets to a style document, and we were intially planning to move our components on the front end to a components folder, but that caused a lot of issues so we moved it back. We went through and removed any console logs, and we ensured that all the pages did pop up with any error messages. From there, Sophia took charge with adding the About Us page and doing updates on the Home page to include the title and links to the About Page. While Sophia was working on this, Javier was working on building out the CSS for the Search page to put the surprise me button, the recipe list, and the search into 3 columns. I worked on adjusting the sizing for the pictures and videos in the carousel and recipe details pages as well.

7/28/2023

Standup:

    Goals:
    - Finish README

Today we wrapped up the last parts of the project by finishing the requirements for the ReadMe. Javier wrote out the functionality, David worked on the Project Initialization and the Intended Market, and Sophia worked on API Design, Data Models, and Integration. I went back and worked on adjusting out excalidraw documents to match our current website along with adding more pages that we built out. From there, I added screenshots of all the different excalidraw pages and built out the GHI page for the ReadMe.
