const score = document.getElementById('score');
const timeLeft = document.getElementById('time-left');
const squares = document.querySelectorAll('.square');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const grid = document.getElementById('grid');

let moleInterval;
let scoreCounter = 0;
let gameTimer;
let gameTimeCount = 15;
let gameStarted = false;
const showMole = `<img src="mole.png" id="mole-img">`;

//set random location of the mole
const randomizeMole = () => {
     let mole = document.querySelector('.mole');
     mole.classList.remove('mole');
     mole.innerHTML = '';
     let randomSquare = squares[Math.floor(Math.random() * squares.length)]
     randomSquare.classList.add('mole');
     randomSquare.innerHTML = showMole;
}

//set time interval when game starts;
const startGame = () => {
     if (!gameStarted) {
          gameStarted = true;
          scoreCounter = 0;
          moleInterval = setInterval(_ => {
               randomizeMole();
          }, 1000);
          gameTimer = setInterval(_ => {
               gameTimeCount--;
               timeLeft.innerHTML = gameTimeCount + "s";
               checkGameTimer();

          }, 1000)
     }
}

//check timeout of the game
const checkGameTimer = () => {
     if (gameTimeCount === 0) {
          clearInterval(gameTimer);
          clearInterval(moleInterval);
          gameStarted = false;
          gameTimeCount = 15;
     }
}
//count score
const countScore = () => {
     if(gameStarted){
          scoreCounter++;
          score.innerHTML = scoreCounter;
     }
}

//Reset the game
const resetGame = () => {
     clearInterval(moleInterval);
     clearInterval(gameTimer);
     scoreCounter = 0;
     gameTimeCount = 15;
     timeLeft.innerHTML = gameTimeCount + "s";
     score.innerHTML = scoreCounter;
     gameStarted = false;
}

//start the game when start button is clicked;
start.addEventListener('click', startGame);
grid.addEventListener('click', (e) => {
     if (e.target.parentElement.classList.contains('mole'))
          countScore();
})
reset.addEventListener('click', resetGame);
