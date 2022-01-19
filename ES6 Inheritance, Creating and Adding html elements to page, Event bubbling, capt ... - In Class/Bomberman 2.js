const grid = document.querySelector('.grid');
const flagsLeft = document.getElementById('flagsLeft');
const result = document.getElementById('result');
let validCounter = 0;
let flagsCounter = 0;
let totalFlags = 10;
let gameOver = false;

//Creating 100 boxes with random bomb locations
(function createBoxes() {
     flagsLeft.innerHTML = totalFlags;
     let classArray = []
     for (let i = 0; i < 100; i++) {
          if (i > 89) {
               classArray.push('bomb')
          } else classArray.push('valid')
     }
     for (let i = 0; i < 100; i++) {
          let box = document.createElement('div');
          let index = Math.floor(Math.random() * classArray.length);
          let className = classArray[index];
          classArray.splice(index, 1);
          box.setAttribute('id', i);
          box.setAttribute('class', className);
          grid.appendChild(box);
     }
})();

const getBombsFromNeighbour = (target, val) => {
     if (val === 0 || val === 9 || val === 90 || val === 99) {
          setNumberOfBombs(target, cornerCase, val);
     }
     else if (val > 0 && val < 9 ||
          val > 90 && val < 99 ||
          val === 10 || val === 20 || val === 30 || val === 40 || val === 50 || val === 60 || val === 70 || val === 80 ||
          val === 19 || val === 29 || val === 39 || val === 49 || val === 59 || val === 69 || val === 79 || val === 89) {
          setNumberOfBombs(target, edgeCase, val);
     } else {
          setNumberOfBombs(target, generalCase, val);
     }
}

//Handle Corner Cases
const cornerCase = (val) => {
     let arr;
     if (val === 0) {
          arr = [val + 1, val + 10, val + 10 + 1];
     }
     else if (val === 9) {
          arr = [val - 1, val + 10, val + 10 - 1];
     }
     else if (val === 90) {
          arr = [val + 1, val - 10, val - 10 + 1];
     }
     else if (val === 99) {
          arr = [val - 1, val - 10, val - 10 - 1];
     } 
     return countBombs(arr);
}

//Handle edge cases
const edgeCase = (val) => {
     let arr;
     if (val > 0 && val < 9) {
          arr = [val + 1, val - 1, val + 10, val + 10 + 1, val + 10 - 1];
     } else if (val === 10 || val === 20 || val === 30 || val === 40 || val === 50 || val === 60 || val === 70 || val === 80) {
          arr = [val - 10, val + 10, val + 1, val - 10 + 1, val + 10 + 1];
     } else if (val > 90 && val < 99) {
          arr = [val + 1, val - 1, val - 10, val - 10 + 1, val - 10 - 1];
     } else if (val === 19 || val === 29 || val === 39 || val === 49 || val === 59 || val === 69 || val === 79 || val === 89) {
          arr = [val - 10, val + 10, val - 1, val - 10 - 1, val + 10 - 1];
     }
     return countBombs(arr);
}

//Handling Cases other than edge and corner
const generalCase = (val) => {
     let arr = [val - 1, val + 1, val - 10, val + 10, val - 10 - 1, val - 10 + 1, val + 10 - 1, val + 10 + 1];
     return countBombs(arr);
}

// Counting Bombs in neighbour
const countBombs = (arr) => {
     let bombsInNeighbourHood = 0;
     arr.forEach(item => {
          let element = document.getElementById(item.toString());
          if (element.classList.contains('bomb')) bombsInNeighbourHood++;
     });
     return bombsInNeighbourHood;
}
//setting class to the box on the basis of number of bombs
const setNumberOfBombs = (target, cases, val) => {
     let bombsInNeighbourHood = cases(val);
     target.setAttribute('data', bombsInNeighbourHood);
     if (bombsInNeighbourHood === 1) {
          target.classList.add('one');
     } else if (bombsInNeighbourHood === 2) {
          target.classList.add('two');
     } else if (bombsInNeighbourHood === 3) {
          target.classList.add('three');
     } else if (bombsInNeighbourHood === 4) {
          target.classList.add('four');
     }
}
//setting data attribute to the boxes on the bases of no. of bombs in surroundings 
const setDataAttribute = () => {
     let boxes = document.querySelectorAll('.valid, .bomb');
     boxes.forEach((box, index) => {
          getBombsFromNeighbour(box, index);
     })
}
setDataAttribute();

//Displaying all Bombs on Game over
const showAllBombs = () => {
     let bombs = document.querySelectorAll('.bomb');
     bombs.forEach(bomb => {
          bomb.innerHTML = '💣';
          if (!bomb.classList.contains('checked')) {
               bomb.classList.add('checked');
          }
     })
}

//Checking whether the flaged boxes contain bomb or not
const checkFlagedBoxesContainBomb = () => {
     let flagedBoxes = document.querySelectorAll('.flag');
     for (let i = 0; i < flagedBoxes.length; i++) {
          if (!flagedBoxes[i].classList.contains('bomb'))
               return false;
     }
     return true;
}

//on Click
grid.addEventListener('click', (e) => {
     e.stopPropagation();
     //if game not over
     if (!gameOver) {
          let target = e.target;
          let numberOfBombsSurrounded = target.getAttribute('data');
          let targetClasslist = e.target.classList;
          //if element contains bomb set game is over
          if (targetClasslist.contains('bomb')) {
               gameStatusMessage('LOSE');
               return;
          }
          //if element does not contain bomb
          else if (targetClasslist.contains('valid')) {
               //if element contains flag, remove the flag and decrement the flag counter
               if (target.classList.contains('flag')) {
                    target.classList.remove('flag');
                    flagsCounter--;
                    flagsLeft.innerHTML = totalFlags - flagsCounter;
                    target.innerHTML = numberOfBombsSurrounded;
               }
               //if element is not checked , set it to checked and increment the valid counter
               if (!targetClasslist.contains('checked')) {
                    targetClasslist.add('checked');
                    target.innerHTML = numberOfBombsSurrounded;
                    validCounter += 1;
                    //if validCounter becomes 90 show the message you won the game
                    if (validCounter === 90) {
                         gameStatusMessage('WIN');
                    }
               }
          }
     }
}, false);

//On right click
grid.addEventListener('contextmenu', e => {
     e.stopPropagation();
     //preventing the default behaviour of the right click
     e.preventDefault();
     if (!gameOver) {
          let target = e.target;
          if (flagsCounter < totalFlags) {
               //check if element is flagged, if flaged remove flag and decrement the flag counter
               //else add flag and increment the flag counter
               if (target.classList.contains('flag')){
                    target.classList.remove('flag');
                    flagsCounter--;
                    flagsLeft.innerHTML = totalFlags - flagsCounter;
                    target.innerHTML = '';
               }
               else if (!target.classList.contains('flag')){
                    target.classList.add('flag');
                    flagsCounter++;
                    flagsLeft.innerHTML = totalFlags - flagsCounter;
                    target.innerHTML = '🚩';
                    //check if flag counter is equal to total flags
                    // and also check all flagged boxes contain bomb
                    //if they contain bomb display 'you have won message else lose message
                    if (flagsCounter === totalFlags && checkFlagedBoxesContainBomb()) {
                         gameStatusMessage('WIN');
                    } else if (flagsCounter === 10 && !checkFlagedBoxesContainBomb()) {
                         gameStatusMessage('LOSE');
                    }
               }
          }
     }
});

//set result message
const gameStatusMessage = (winOrLose) => {
     result.innerHTML = `GAME OVER: YOU ${winOrLose}!`;
     gameOver = true;
     showAllBombs();
}
