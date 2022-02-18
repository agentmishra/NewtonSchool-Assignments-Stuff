Question 1
Movie Booking JS
First step in the website will be making a nav bar using flex.
Inside the nav you will have a div with classname logo and a list
for displaying the respective links as in the mock UI.
Use flexbox in nav to display the logo and list of links on the opposite side of the screen
and also use flexbox in the list inside the nav also, to evenly space the links.

Give nav a padding of 12px 16px.
All the text on nav should have white for font color, so apply the property on nav itself.

You will be using the API functions in api. js file to fetch the relevant data.
When page loads, make a request to get list of all movies using fetchMovieList function.

This will return array of objects each having name and thumbnail URL. While you are fetching this data,
we cannot show user a black screen, so instead we will show a loader element with id="loader", it could contain
text "Loading. " or an animation, its up to you, but should have the id="loader".

After the data is finished loading, i. e request has finsihed, remove the loader from screen(dont hide it, remove it).
Inside the main component, add. movie- holder div inside it.

Inside that div we will be adding the individual movie components.
Each individual movie component will be made up of an anchor tag on the outside with class. movie- link.
Example of the basic strucutre is given below. Replace moviename by actual name of the rendered movie

<a class="movie- link" href="/moviename">
<div class="movie" data- id="moviename">
<div class="movie- img- wrapper">
</div>
<h4>$moviename</h4>
</div>
</a>

movie- img- wrapper will have css, background image property set to the imgUrl of the movie and background size as cover.

index. html has markup defined for #booker class, which will hold elements related to seat booking.
Upon clicking the movie- link, the app loads data from the fetchMovieAvailability using moviename
as parameter.

After data has been loaded h3 inside #booker should be visible by toggling the pre defined class v- none.
Also two 4x3 grids should be displayed. Each box is numbered and equivalent of a seat. Seat will be numbered from 1-12
on left box and 13-24 on the right hand side box.

Each grid will have class "booking- grid", and each cell in it will have id "booking- grid- gridNumber", gridNumber
being the values between 1 - 24.

The two "booking- grid" divs will be inside "booker- grid- holder" div.
Since the API returns list of unavailable sets, when rendering the booking- grid, cells which are not available
will have class "unavailable- seat" which willbe unclickable, rest all other seats will have "available- seat" class and
can be selected.

Clicking on "available- seat" div adds a classname "selected- seat" which should have these css styles "border:4px outset rgb(0, 0, 0)". You can select multiple seats.

After selecting the first seat, the button with id="book- ticket- btn" which is already present in html markup, should toggle its v- none class, i. e remove it.

If the selected seats ever go bacck to zero, i. e user selects 2 seats and deselect them later, the button should again be set classname v- none to hide it.

So when user has selected more than one seats, upon clicking the "book- ticket- btn" the content inside #booker div is deleted and then replaced by a div with id="confirm- purchase".
Inside that display a h3 with text "Confirm your booking for seat numbers:${seats. join(", ")}", where seats are the selected seats.
Also display a form with id="customer- detail- form" inside the confirm- purchase div. This form will use proper input types
for taking email and phone number of the user(tel). All of them should be marked required. Then finally a button with type="submit".

Upon filling the relevant details and clicking the submit button, again the content inside #booker div is deleted and then replaced by a div with id="Success".
Inside that it shows "Booking details", followed by the booking details,
seat numbers, email and phone number.
