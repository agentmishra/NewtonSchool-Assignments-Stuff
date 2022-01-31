Question 4
Grofers Checkout
You are given a Grocery list in a HTML table. You want to find the total price by calculating the sum of prices of individual items listed in the table. Write the sum logic in such a way that it works for given prices and also if the values are changed in the table. Show the total price by adding new row to the table with single cell that has the total price.

Implementation Hint:

You can choose to use Element.querySelectorAll() to get the prices from the HTML table.

Once you get the numbers, you can add them to get the total price.

You can choose to use Document.createElement() to create the last row of the table that shows the total value.




Make sure that you give the following data attributes and values to the elements. They are used to identify the elements when test cases are run.

data-ns-test="prices" for element that stores the price of each item in the list
data-ns-test="grandTotal" for the element where sum total is displayed
