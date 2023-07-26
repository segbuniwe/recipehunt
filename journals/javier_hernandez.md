6/26/2023

JWTDOWN was indeed a challenge. After the team and I realized that all we had to do to create an account was to insert it in to the database the rest was smooth sailing. Or so I thought. I was definitely stumped on how to make the functions work since ideally, right after creation, you'd want that user to be signed in. It did not occur to me that after creation we had their info in the database. After the 15 minute break I came back and was able to find the account we just created and sign in. I'm happy my team is helpful, and excited for the challenges to come.

6/27/2023

Today went really well! We were able to integrate the usage of both Spoontacular and Tasty API's. We dove even deeper to accomplish the task of having a new collection in our db named ingredients, and having the current signed in user post their list of ingredients on to the database. At first we had done so in a way which was redundant, as per Riley. Through his guidelines we were able to manipulate our code so that we didn't need the extra code we wrote, instead we used the JWTDown library to assist us with the task. Overall an excellent day and I feel as if we're making huge progress early on in our project. Hopefully we can keep the ball rolling when it comes to the front end, because at this pace we'll be there in no time.

6/28/2023

Another great day. We were able to implement two features, favorites and ratings tied to our users account. Favorites came with full CRUD functionality where as ratings only has create, and update for now. Getting the JWTDOWN library to be in sync with our models has been kind of tricky, and honestly the only thing holding us back from wrapping up today even faster. Tomorrow we plan on starting on our front end since I believe 99% of our back end is done. Super excited to start the front end, I think it appealing to see my work change in front of my eyes, but yeah overall a solid day for the group and myself!

7/11/23

A passive day for me. Today I was in the passenger seat as I saw my teammates handle the front end authentication using RTK queries. Much of that concept is still vague to me and I need to ensure I get back on track to be a contributing force to my teammates.

7/12/23

Understanding React Redux a bit more thanks to my teammates. It does seem much simpler than writing out code for the frontend that we already have in our backend. Redux really took a lot of that boiler plate stuff out the way so we can easily make api calls from the front to the back to the api without fetching. Proud of our team, we got some really good learners in here who stick to the material and I'm enjoying learning from them. I was able to play around with bootstrap to make our Recipe Details page look somewhat like our excalidraw wireframe. Definitely still in its rough draft stage but in the 45 minutes I spent looking at bootstrap docs, I can easily knock out the rest tomorrow.

7/13/23

Implementations we made today -

1. Fixed vaildation error when calling List Tasty API Recipes.
2. We worked as a team on to complete the Favorites button.
3. I styled the recipe details page a bit more.
4. Implemented search page for recipes.

I feel really good about today. I've been slacking on Redux knowledge but I took it head on today to gain some experience. Thankful for my knowledgable team members who were able to help me through every step of the way. Even though using the Redux library isn't natural to me, some troubleshooting aspects are. Really starting to see my programming skills come to life because of Redux troubleshooting. We got a lot done today, Realized Spoonacular's API is a bit lackluster when it comes to the images of their recipes, so that leaves the debate of wether or not to focus on our other API resource, Tasty. Tasty alone also has its drawbacks but that's up for discussion with the team. Favorites button was fun to implement, I can't believe we got stuck on the delete URL and that Riley was able to identify the problem almost immediately. Overall super productive day, and I'm we can see the app coming to life.

7/14/23

Today we just made some unit tests. At first I was reluctant because I truly just did not get it. After speaking to my team, they helped me realize how it works and we got to it. Pretty simple day.

7/17/23

Amazing day we got A LOT done. We were able to implement reviews on the back and front end for recipes, and tie those reviews to a user. Sophia is truly a wizard when it comes to Redux as she took the lead on this one without hesitation. We had to map a lot today and we learned how nested maps work. In one of our components we had objects within objects that were buried deep in there so I figured that nested map would be the best approach, and it worked. We also made the switch from pulling from spoonaculars API to Tastys API. Spoonacular wasn't cutting it for us, its images were way too low quality, plus they had no video.

7/18/23

Today we were able to implement the carousel on the front end. I wish we would have made it so that you can see multiple images at a time, but who knew CSS is a beast of its own. Other than that we added an ingredients table to show the user their inputted ingredients.

7/19/23

We got the surprise me button to work. We used some math in our code to generate a random number and we then used that random numner in an api call to display to the user who's mind can't be made up on dinner, a recipe without thinking about it. We were also able to implement a sort for the recipes in alphabetical order.

7/20/23

Today was kind of light. We implenteded color distinction to show the recipes ingredients vs what the users ingredients "fridge". If they had them, it'd be highlighted green, if not it's red. We were stuck and still are actually because we are trying to filter ingredients based on what the users fridge looks like. ie, the recipes with the most match ingredients in the users list, after trying for hours my team and I were not able to figure it out. Hopefully tomorrow is a better day.

7/24/23

Today we decided to just study CSS on our own.

7/25/23
Pretty easy day. We made redirects back to the home page when the user logs out. Made a favorites list to see the logged in users favorites and a link to take them back to that recipe. Added almost like an about me to main page but realized it took up too much space so we are figuring out where else we can showcase this information.

7/26/23

I got to work immediately today styling the profile page.
Styling the carousel is difficult, I got it to center to where I wanted but then realized the arrows were off. Then the images being rendered in were off. It's a mess. But then Sophia came in and helped me out she was able to get it more centered as far as the arrows go. Images still come in wonky but its not the worst. Main page looks awesome, we got a nice lil food video that we display on navigation to our page, and I removed the navbar box and it looks so much cleaner. Also added in two new fonts to use throughout our website. One of them is only targeted towards the nav-brand icon, and the rest is utilized through the body of the homepage. Lastly, we created a card that once the surprise me button is clicked, it displays a visual representation of a recipe to the user who is unsure of what to have for dinner. Great day, CSS is a lot of fun until you're working with carousels...
