Question 1
Github Issues JS
In this project, you will be using the github api to get list of issues and display it in a pagewise manner.

You will specifically be using this url for fetching issues
https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5

By default you will start with page 1 when your app loads. This API returns a lot of data, your task is to only display issue names in an ordered list.

Also display "Page number 1" on first page, and keep changing it depending on number of page.

You will make 2 buttons,

One button with id="load_next" which loads the next page of issues by calling the above mentioned API with the current page number + 1, replacing the currently displayed issues with new issues and also changing the "Page number 1" heading to "Page number 2".

And the second button with id="load_prev", which goes back one page and displays the previous, page's issues and also changes the Page number heading.(Edge case hint:- you cannot go to Page number 0)

Note:- Do not change the per_page parameter in URL, you only have to display 5 issues per page.
