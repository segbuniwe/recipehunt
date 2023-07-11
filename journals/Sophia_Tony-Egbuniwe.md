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
