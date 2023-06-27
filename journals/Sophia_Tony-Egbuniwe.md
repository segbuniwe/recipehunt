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
