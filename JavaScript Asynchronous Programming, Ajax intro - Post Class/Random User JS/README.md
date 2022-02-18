Question 2
Random User JS
In this app, you will be using this https://randomuser.me/api/ endpoint to get a random user and show their info.

This endpoint returns a lot of info, but you only need to display specific things,
By default only full name (first name + last name) and image will be visible. The API returns URLs for 3 image sizes , use only the large one.

Display 3 buttons with for Age, Email and Phone
each having attribute "data-attr" with value equal to "age", "email" and "phone" respectively.

Make a section with heading additional info, which upon clicking the above mentioned buttons displays the relevant data inside it.

Upon clicking one of the button you will display the relevant info, for ex:- If user clicks age button, display the age of that user you got
from the initial API call, do not make another API call and display some other user's age.

If user clicks another button for ex:- email button, remove whatever was being displayed earlier (not name and photo) and only show the email instead.

By default when page loads, age,email and phone are not being showed.

The last feature you have to implement is a button with id="getUser" which upon clicking makes another call to the API and gets a new user and displays there photo and full name, and subsequently on clicking phone,email buttons etc displays their relevant info.
