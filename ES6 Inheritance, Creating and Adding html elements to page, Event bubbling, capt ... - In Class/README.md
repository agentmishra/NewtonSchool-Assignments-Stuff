Question 1
Bomberman 2
The game we designed in Bomberman-1 was all based on luck. Let's extend the same game with the same 10x10 grid and try to help our fellow users get a path to win. But how?


Whenever a user clicks on a cell he/she should be able to see a number based on the following conditions:
Consider a rectangular area around the cell clicked.

Calculate the number of bombs contained in that area.


Display the number in the cell.



One might think what about the cells at the extreme edges

Worry Not!
Consider the following images. These will help you consider various edge cases.








How will it help?
By clicking on various cells user may be able deduce which cells contain bombs. Following the same pattern the user may complete the game.

Users first! 🙏
You have helped users a lot by guiding them the path, but what if they could remember their conclusions out of those helping paths?
For example: The user is sure that some cell contains a bomb, they may want to remember it so that they don't have to make calculations again and again.

Let's get to the point.
Give the users an option to flag a cell as follows:

When users right-clicks on a cell they should see something like this.




This way users can remember that they concluded there's a bomb in that cell and should not click it. If a user left-clicks on this flagged cell, normal flow should continue.

Time for celebration 🎉
If a user has scored 90 points it means he has clicked all the safe cells or flagged all the 10 bombs. A message should be displayed on the screen saying "YOU WIN!". Otherwise "YOU LOSE!".
Acceptance criteria
Use 🚩 💣 to flag and show bombs

Each of the box will have id {0, 1, .. 99}

For valid boxes className list should contain 'valid'

For bomb boxes className list should contain 'bomb'

Boxes which are revealed (on game over or user left-click) className list should contain 'checked'

Flaged Boxes (*by user) className list should contain 'flag'

Each of the box should have data attribute which has value equal to the number cells containing bomb in its neighbourhood

ex: <div id="13" class="valid checked" data="0"></div>

Message should be inside div tag of id 'result'

Keep track of flags left inside span tag of element id 'flagsLeft'
