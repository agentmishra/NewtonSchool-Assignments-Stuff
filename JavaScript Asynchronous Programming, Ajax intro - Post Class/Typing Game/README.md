Question 3
Typing Game
One of my favorite time passing game is touch typing. Good command of touch typing is a very important skill, especially when it comes to productivity. Sometimes you can feel it too.
Touch typing gives leverage when you are competing with others. Also, it's fun, isn't it?


Task: Create Touch Typing Game
Description: Create a typing game which has a timer and show the typing speed in words per minute(WPM)



Acceptace criteria

Timer element ID timer

WPM element ID wpm

Container element ID container

correct, incorrect classes should be used appropriately to mark letters if user typed some letters.

Initially timer and wpm should be zero(0)

User can start the game clicking on container element

In order to start the game, start the timer and user should be able to type and see their progress in the wpm element

User can stop the game by clicking outside of container

In order to stop the game, stop the timer and set to zero(0), pause the wpm whatever it's value was and remove classes correct/incorrect from letter of the quote (make it like new rendered quote)

If user typed the rendered quote completely (doesn't matter correct/incorrect), automatically render new quote and set timer to zero(0)

Update the timer after each second by 1 (one) when game stated. Timer is showing the time passed in second.

Given formula should be used to calculate speed(wpm)

You should be using this API to get quotes. Be mindful for special letters/symbols

Use fetch() to make API calls

Use Math.round() in order to round wpm.

Time-Elapsed (sec) should be calculate using Math.floor((new Date() - startTime) / 1000)startTime ->Timestamp(when timer started)

WPM should be calculating using Math.round(parseFloat(correctStrokes()) / 5.0 / (parseFloat(Time-Elapsed(sec)) / 60.0)); Formula is shown in the picture

Update the wpm on each-stroke(doesn't matter correct/incorrect)

Input should be given to body tag. Hint add event listner to document.

Use keydown event for input. Hint: e.key/e.keyCode

Try to make it interactive/engaging/awsome. Happy coding :)
