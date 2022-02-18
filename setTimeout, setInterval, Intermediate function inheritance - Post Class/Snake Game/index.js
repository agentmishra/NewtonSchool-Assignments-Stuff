const gameContainer = document.getElementById('gameContainer');
const scoreBoard = document.getElementById('pointsEarned');
const GRID_SIZE = 1600;
const RENDER_INTERVAL = 100;
const GAME_ROW = 40;
let gameScore = 0;
let snakeBody = [800];
let gameOver = false;
let gameInterval;
let inputDirection = -1;
let gamePaused = false;
let foodPosition = 780;

//creating main functionality
const createBoxes = (total) => {
     for (let i = 1; i <= total; i++) {
          let box = document.createElement('div');
          if (i == foodPosition)
               box.setAttribute('class', 'food');
          box.setAttribute('id', `pixel${i}`);
          gameContainer.appendChild(box);
     }
}
createBoxes(GRID_SIZE);

function init() {
     if (!gameOver) {
          gameInterval = setInterval(() => {
               update();
          }, RENDER_INTERVAL);
     }
}
init();
function update() {
     updateSnake();
     draw();
     updateFood();
}

function draw() {
     drawSnake();
     if (snakeHeadIntersection()) {
          clearInterval(gameInterval);
     };
}

function updateSnake() {
     snakeBody.forEach(segment => {
          let element = document.getElementById(`pixel${segment}`);
          element.removeAttribute('class');
     });
     for (let i = snakeBody.length - 2; i >= 0; i--) {
          snakeBody[i + 1] = snakeBody[i];
     }
     updateSnakeHead();
}

function updateSnakeHead() {
     let snakeHead = snakeBody[0];
     if ((snakeHead % GAME_ROW == 1) && (inputDirection === -1)) {
          snakeBody[0] += (GAME_ROW - 1);
     }
     else if ((snakeHead % GAME_ROW == 0) && (inputDirection === 1)) {
          snakeBody[0] -= (GAME_ROW - 1);
     }
     else if (snakeHead > 0 && snakeHead <= (GAME_ROW) && (inputDirection === -GAME_ROW)) {
          snakeBody[0] += (GRID_SIZE - GAME_ROW);
     }
     else if (snakeHead > (GRID_SIZE - GAME_ROW) && snakeHead <= (GRID_SIZE) && (inputDirection === GAME_ROW)) {
          snakeBody[0] += (GAME_ROW - GRID_SIZE);
     } else {
          snakeBody[0] += inputDirection;
     }
}

function drawSnake() {
     snakeBody.forEach(segment => {
          let element = document.getElementById(`pixel${segment}`);
          element.setAttribute('class', 'snakeBodyPixel');
     });
     let snakeHead = document.getElementById(`pixel${snakeBody[0]}`);
     snakeHead.classList.add(headStyle(inputDirection));
}

function headStyle(position) {
     let headClass;
     switch (position) {
          case 1:
               headClass = 'ltr';
               break;
          case -1:
               headClass = 'rtl';
               break;
          case GAME_ROW:
               headClass = 'ttb';
               break;
          case -GAME_ROW:
               headClass = 'btt';
               break;
     }
     return headClass;
}

function snakeHeadIntersection() {
     let head = snakeBody[0];
     let snakeExceptHead = snakeBody.slice(1);
     return snakeExceptHead.some(segment => head === segment);
}

//Add Event Listeners
window.addEventListener('keydown', (event) => {
     getInputDirection(event);
     pauseResumeGame(event.key);
});
function getInputDirection(event) {
     switch (event.key) {
          case "ArrowUp":
               if (inputDirection == GAME_ROW) return;
               inputDirection = -GAME_ROW;
               break;
          case "ArrowDown":
               if (inputDirection == -GAME_ROW) return;
               inputDirection = GAME_ROW;
               break;
          case "ArrowRight":
               if (inputDirection == -1) return;
               inputDirection = 1;
               break;
          case "ArrowLeft":
               if (inputDirection == 1) return;
               inputDirection = -1;
               break;
     }
}

function pauseResumeGame(keyPressed) {
     if (keyPressed == ' ') {
          gamePaused = !gamePaused;
          if (gamePaused) {
               clearInterval(gameInterval);
          } else {
               init();
          }
     }
}

//Food Code

function randomGridPosition() {
     return Math.floor((Math.random() * GRID_SIZE) + 1);
}

function updateFood() {
     if(snakeFoodOverlap()){
          removeFood(foodPosition);
          snakeBody.push(foodPosition);
          drawFood();
          scoreIncrement();
     }
}

function scoreIncrement(){
     gameScore++;
     scoreBoard.innerHTML = gameScore;
}

function removeFood(position){
     let previousFood = document.getElementById(`pixel${position}`);
     previousFood.classList.remove('food');
}

function drawFood() {
     foodPosition = getRandomFoodPosition();
     let currentFood = document.getElementById(`pixel${foodPosition}`);
     currentFood.classList.add('food');
}

function getRandomFoodPosition() {
     let newFoodPosition;
     while (!newFoodPosition || checkFoodOnSnake(newFoodPosition)) {
          newFoodPosition = randomGridPosition()
     }
     return newFoodPosition
}

function checkFoodOnSnake(foodPosition) {
     return snakeBody.some(segment => foodPosition === segment);
}

function snakeFoodOverlap() {
     if (snakeBody[0] === foodPosition) return true;
     return false;
}
