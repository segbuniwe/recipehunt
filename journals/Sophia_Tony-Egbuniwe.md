# 06/26/2023
Today, we worked as a group to create the backend authentication. Javier shared his screen and the four of us talked through what we believed would be the way to start building the authentication file. It was very difficult since there were a lot of moving parts to authentication in the backend, but it seems like we were able to figure it out. It was great since as soon as anyone had an idea, we tried it out to see if it worked. So far, the creating an account, logining in, and logging out functionality seems to work when we run the code on FastAPI. We also built up our database using MongoDB before we started anything else.

# 06/27/2023
Goals:
- Make calls to TastyAPI in GET request
- Make calls to SpoonacularAPI in GET request
- Start CRUD for ingredients model

Today we worked as a group to create a GET request to our apis (TastyAPI and SpoonacularAPI) to get the necessary fields that we think that we would like for our project. This was difficult as we had problems accessing the spoonacular website at first since they were upgrading their infrastructure. We were finally able to get that working even though we had to deal with some key errors initially. Accessing the tasty api was easier and more straightforward once I made my API key. We also were able to start working on the CRUD for the ingredients model that the user will have access to. This was also difficult since we were kind of confused on where to start, but I think my idea of starting by creating a new key to hold the account_id helped and we were able to go from there until we made it work. After talking with Riley, we realized that it would be better if the ingredients were automatically associated with an account/logged in user so we added a aoccount_data = Depends(authenticator) parameter to our router.post so that it is gotten simulataneously and parsed through the account_data to get the specific id. My group seems to have a really good setup so far that even though one person is sharing their screen and typing, we are all contributing to what is goinf on, which is nice.

Goals For Tomorrow:
- Finish up authentication (DuplicateError)
- Finish URD for ingredients
- Start CRUD for favorites

# 06/28/2023
Goals:
- Finished authentication (DuplicateError message was added to specifiy unique email/username, GetToken)
- Finished CRUD for ingredients
- Finished CRUD for favorites
- Created post and put requests for ratings

Today we worked as a group to finish adding the little details that we missed to the auth section such as raising the DuplicateError message if someone tries to create an account with an already in use email. We added the get token path so that we could see the token of the current looged in user. We also finished up the CRUD functionality for both the ingredients collection and the favorites collection so that both are associated with whoever the logged in user is. Javier and I took on the job of creating the post and put paths for a new ratings collection. We were able to create post and put paths for this possible ratings section that has an associated recipe_id and and account_id. We hope to use a useParams in the frontend that can hold the recipe_id of the called 3rd party api and then use that to create an association with the ratings. There were times of many mistakes today especially with KeyErrors and value is not of type dict, but we were able to look back at our code and figure out where the problems may have come from.

Goals For Tomorrow:
- Start Frontend Authorization
- Start Login page, Signup page, Main page in Raect
- Possibly work on backend to make calls to youtube through spoonacular

# 06/29/2023
Goals:
- Made our ratings routers fit the RESTful schema with their endpoints
- Added query and router to get ratings for specific account user
- Fixed update ratings to be updated solely by the ratings id
- Created signup page on React

Today we worked as a group to finish up the queries and routers for the ratings collection. After talking with Riley, we realized that our enpoints in the ratings router were not RESTful so we had to make them RESTful. This led us to a problem with our update ratings put request. We originally had the ratings be updated by the recipe id it was associated with which was incorrect. I was able to come up with a solution for it by making a new pydantic class model that asks for everything for the recipe id since we don't need that updated. All we wanted updated was the rating_in associated with a specific account user. My solution fixed this and then we were able to finish all of the other RESTful endpoints that we needed. We then decided to start on the frontend by working on the signup page and login page. Using the information in the frontend section in Learn, we were able to figure out how to get the signup form to function. We were able to put in the necessary details and saw that account be added to our monogo database. The login was difficult for us, but after talking to Riley we decided to put a pause on doing frontend stuff until after summer break and seeing more of his lectures.

Goals For Tomorrow:
- Add bootstrap to signup page on React to practice using bootstrap

# 07/11/2023
Goals:
- Made a signup form using React Redux
- Made a login form using React Redux
- Made a simple functional main page for project
- Made a Navbar using React Redux
- Made Navbar change what it shows based off of logged in status (can see login and signup if not logged in only; can see logout button if logged in)

Today we worked as a group to start on the frontend of our project. I took lead in working on this for us today, and shared my screen so my team could see what I was doing and offer up suggestions. We were able to create a main page, signup page, and login page so that when a user signs up they are automatically logged in and taken to the main page. This also changes what they see in the navbar. The user can logout by hitting the logout button in the nav. Once logged out, they can see the signup and login links again which they can use to do either of them.

Goals For Tomorrow:
- Create detail page for specific recipe

# 07/12/2023
Goals:
- Made a recipe detail page to see details for specific recipe using React Redux
- Used useParams to get recipeId from the url path and based off of that recipeId the recipe's title and image for now is shown

Today we worked as a group to work on the frontend of our project and created a detail page of a recipe. Today, we had a lot of moving parts that each person wanted to try and code so a lot of us shared our screens at some point and typed code. We were able to create a basic detail page that shows the title of the recipe and an associated image. We were able to do this using React Redux to access our fastAPI backend that we made for our spoonacular API. Through that, we used useParams to hook onto the recipeId shown in the url path and from that recipeId, the detail page showed a specific recipe's title and image.

Goals For Tomorrow:
- Create search page for recipes that have filter and sort options

# 07/13/2023
Goals:
- Created a favorites button that when clicked on toggles between Add Favorite (POST to favorites list) and Remove Favorite (DELETE from favorites list)
- Added ability to see button on basis of if you have an account or not
- Added error handling to login and signup forms
- Created search page with links to associated recipe detail page

Today we worked as a group to get a basic frontend search page and added more functionality to our recipe details page. We made our search page so that when you type in a search criteria the page returns a list of links to a specific recipe along with the recipe's name. We plan to add more CSS and functionality later like images, but wanted to get the basic look down before adding any extras. We also added the ability for a logged in user to see the favorites button. Once they click the button the recipe is added to their favorites list and they can now unfavorite the recipe if they choose too. I also took the lead on adding error handling to our login and signup forms (status 401, 422 for login and status 400 for signup). We took turns sharing our screens today, so many of us made pushes and commits today.

Goals For Tomorrow:
- Create profile page for each account

# 07/14/2023
Goals:
- Created unit tests for tasty api and ingredients

Today we worked as a group to get make our unit tests since we went over that in lecture today. This went well for us. We each took a turn sharing our screen and writing one component of the unit tests required for the grade. In total we wrote unit tests for CRD for ingredients and GET for the tasty api list.

Goals For Tomorrow:
- Create profile page for each account
- Switch from spoonacular api to tasty api since the images are better on tasty

# 07/17/2023
Goals:
- Created reviews modal form on front end
- Mapped out reviews to see comments and ratings that all users left for a specific recipe
- Added ability to see account user's first and last name for the rating they left
- Rearranged backend and frontend to use tasty api instead of spoonacular api since the spoonacular images were really bad

Today we worked as a group to add to more aspects of our front-end through React. We were able to switch over our frontend to reflect the tasty api since we felt that it had better resources such as better images and an actual video url. David shared his screen and wrote the code as we all contributed ideas for how to get everything set up. Javier was clutch in showing us how to do a nested map in the JSX file since we had to go deep inwards to retrieve the total ingredients list that we needed for the recipe. I then shared my screen and started writing the code for the ratings section while my team helped me along. We were able to add some necessary details to the backend like a comments section to the RatingsIn and more account information from the account_data. We also created a modal form so that only logged in users can leave a review on a recipe. Once the review is left it is populated into the ratings map that showcases the reviews for everyone to see. We then started working on our profile page, the favorites carousel in particular. We got stuck on how to get access to all the needed information about a recipe since our favorites button only receives the recipe_id and nothing else, but after talking with Riley, we have a better idea of how to at least start tackling that issue (by using props). Shashwath was able to figure out a great way for us to access the necessary information from the recipe pages. We ended up adding more fields to our request body for the favorites and then pulled from the recipes query to get those fields and add them as key-value pairs to our body dictionary when the favorite button is clicked. We were then able to see a list of the names and thumbnail urls for the images in our favorites list which we added to our profile page.

Goals For Tomorrow:
- Finish working on carousel of favorites on profile page
- Add ingredients list and form to profile page

# 07/18/2023
Goals:
- Got carousel of favorites to function properly
- Added ingredients table
- Added ability to update and delete ingredient
- Fixed error in search page
- created singular slice to work out of in redux so that we can easily invalidate tags when needed

Today we worked as a group to add to more aspects of our front-end through React. We started off with trying to get our carousel to work properly and I was able to figure out that with bootstrap we would need a base image to be active for the carosuel to really function as it should. We then talked to Riley and realized that having one slice file is for the best to ensure that the tags can be invalidated properly when needed. Javier shared his screen and we all worked together to consolidate our slices into one apiSlice. We then started working on the ingredients section of the profile page and got the list of ingredients mapped out. Shashwath shared his screen and we worked on creating an ingredients form and adding more detail to our ingredients list. I then shared my screen and took charge in leading us through fixing some errors we found in our search page. Our search page stopped functioning properly after we switched from the spoonacular api to the tasty api so I figured out a way to get the search page to function properly again by adding a useEffect that changes/filters as the form is submitted with a search term. David then shared his screen and we worked on adding the delete functionality to a specific ingredient. We then got stuck on adding the edit functionality since we were trying to do it in a modal form style on the profile page which complicated how we could access the ingredient_id for each ingredient (since we couldn't useParams it), but after talking with Riley about it, we were able to figure out how to start working on the issue by passing the id in as a props from the mapped out list in the profile page to the modal jsx file that we made. It was a very productive day and we all got to do a lot of coding.

Goals For Tomorrow:
- Add more functionality to our search page so one can hopefully search through recipes by ingredients
- Start working on adding more bootstrap CSS to make our webpage look more professional

# 07/19/2023
Goals:
- Added ability to click on a "Surprise Me!" button and react will automatically navigate you to a random surprise recipe
- Added sort by functionality to sort the list of recipes alphabetically
- Added error handling on some forms

Today we worked as a group to add more functionality to our search page. I started off sharing my screen and working through adding some error handling to our ingredients, ratings, and ingredients edit forms. David then shared his screen and we talked through how we were going to add a surprise me button that shows a random recipe from the recipe list. While at first the idea seemed challenging since I only knew a Math.random() method for numbers instead of strings like we needed, we were able to find a way to use that Math.random() method to access the indices of the recipe array randomly. Now when you click on the surprise me button, it will navigate you to a random recipe each time. Shashwath then shared his screen, and we then decided to start on adding a sort by feature that will sort the recipe list alphabetically or by ingredients when clicked on. We started with alphabetically since that seemed simpler but ended up hitting a lot of snags trying to implement this feature. First, we used the wrong event handler for the <select> html tag. We tried onSelect then onClick and then finally realized that we should be using an onChange. We then tried to implement the function that would handleSortSubmit. We tried various methods to sort the array of dictionaries by the name value such as a .sort() and .sort((a,b) => {(...)}) but ended up still getting errors. Eventually we landed on sorting the array with a bubble sort like we had learned in class. However, we were still getting the same error about the object Array being unable to be read. I started sharing my screen at this point and led with writing the code. I felt like all our sort functions should have been working and ended up looking up the error we were getting to see if anyone else had seen it, and we found out that the error was in reference to us trying to directly mutate the data aray for recipes even though it was just a READ query. After making a copy of the data and running that through the sort we were able to get rid of the error and get the sort by alphabetical to work somewhat. We then ran into another error where our sort useState variable that we created had a mismatch with the option values, so the list was being sorted alphabetically but only when the user clicked on "Ingredients" or "Sort by..." from the dropdown instead of "Alphabetical". After talking with Riley, we realized that this issue was most likely a result of having 2 functions in a single onChange handler so they were both conflicting and running async. I had the idea of adding a form to or select for now to move our handleSortSubmit out of the onChange handler and into an onSubmit handler. This thankfully worked for us and now only when you select "Alphabetical" and hit submit will the list be ordered alphabetically. The alphabetical ordering still works well in conjunction with the search bar so you can search by a term and order the list that appears alphabetically.

Goals For Tomorrow:
- Add more functionality to our search page so one can hopefully search through recipes by ingredients
- Start working on adding more bootstrap CSS to make our webpage look more professional
