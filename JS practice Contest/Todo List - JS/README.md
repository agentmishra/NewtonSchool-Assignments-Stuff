Question 1
Todo List - JS
Make a Todo List in which users can

1. Add a task to the list
2. Delete a task from the list
3. Mark a task as completed

1. Add a task to the list: The users will type a task in the text input box and when they click on the 'Add' button, an element should get added within the < ul class="todo- list"> </ul>
Note: Use preventDefault() Event Method to prevent it from submitting a form, since the Add button in HTML is of type submit.

The element added within the < ul class="todo- list"> </ul> must contain the following in the given order:
(a) A list element displaying Task inputted by the user with class todo-item
(b) A 'Complete button' with class complete-btn
(c) A 'Delete button' with class trash-btn


2. Mark a task as completed: On clicking the completed button, the text of the corresponding task that was inputted by the user should get strike-through. e.g. make a coffee and on clicking the completed button again the strike-through should be removed. e.g. make a coffee
Note: Only use the CSS property text-decoration: line-through solid rgb(0, 0, 0); to implement this.

The completed button must have complete-btn as a class and should function as explained, otherwise your test cases will not pass.

3. Delete a task from the list: On clicking the Delete Button, the corresponding component that contains that Delete button should get deleted.

The Delete button must have trash-btn as a class and should function as explained above, otherwise your test cases will not pass.

Do not make any changes to the HTML file.
