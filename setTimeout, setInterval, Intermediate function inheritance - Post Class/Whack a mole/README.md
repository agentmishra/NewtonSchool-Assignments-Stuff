Question 1
Whack a mole
Whack a mole is a game in which there is a mole in the grid and you have to hit it under a time limit as many times as you can.

Specifications
There has to be a grid of 9 cells. There has to be one mole (it can be an image) that keeps changing its position in the grids every second. The player has to hit the mole by clicking on the cell in which it appears. Every time the mouse click happens before the mole disappears, the score increases. There should be a timer running backwards.
There should be two buttons- Start and Reset. The game starts when Start button is clicked and ends when the timer hits zero. If the user wants to Restart the game, they can press Reset button.
1). An h1 tag with the text Whack a mole.
2). An h3 tag with id="score" where your score of the game will be rendered.
3). An h3 tag with id="time-left" where time left for the game will be rendered(should be greater than 10s initially).
4). A start button and a reset button with id="start" and id="reset" respectively.
5). The start button should start the game and the reset button should reset it.
6). Make a grid with 9 squares each with the class name square.
7). Take the interval of one second for a mole position change.
8). The class name of the grid box should include the class name "mole" if the mole is rendered in that particular box.
9). Only one box will contain the class name "mole" as only one mole will be rendered at a particular instant.
10) Your score increases if you hit the mole with your mouse click when it's visible in the grid
