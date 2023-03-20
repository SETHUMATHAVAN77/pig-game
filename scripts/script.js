'use strict';
// elements
// inputs
const btnNewEL = document.getElementById('btn--new');
const btnRollEl = document.getElementById('btn--roll');
const btnHoldEl = document.getElementById('btn--hold');


const score0El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');
const diceEl = document.getElementById('dice');

const player0El = document.getElementById('player--0');
const player1El = document.getElementById('player--1');

// variables
let scores, currentScore, activePlayer, dice, totalScore; 

// functions

function init(){

  // making scores 0 on UI
  score0El.innerText = 0;
score1El.innerText = 0;
current0El.innerText = 0;
current1El.innerText = 0;

// modifying class from player elements
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');

// activating game buttons
btnRollEl.classList.remove('hidden');
btnHoldEl.classList.remove('hidden');

// hide the image
diceEl.classList.add('hidden');

// update global variables
scores =[0, 0];
currentScore = 0;
activePlayer = 0;
dice = 0;
}
// get randomNumber 
function getRandomNumber(num){
  return Math.floor(Math.random()*num)+1;
}

function switchPlayer(){

  // toggle in active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  Number(document.getElementById(`score--${activePlayer}`).innerText = scores[activePlayer]);

  currentScore = 0 ;
  Number(document.getElementById(`current--${activePlayer}`).innerText = currentScore);

  // change activePlayer

  // if(activePlayer === 0){
  //   activePlayer = 1;
  // }else{
  //   activePlayer = 0;
  // }

  activePlayer = activePlayer === 0 ? 1 : 0;

}


// event listeners

btnRollEl.addEventListener('click', function(){
  // 1.generate Random Number
  dice = getRandomNumber(6);

  // 2.display dice 
  
diceEl.classList.remove('hidden');
  diceEl.src=`./images/dice-${dice}.png`;
    
  // 3.check dice === 1
  if(dice !== 1){
    // add dice to current score
    currentScore = currentScore + dice;
    // display current score on UI
    Number( document.getElementById(`current--${activePlayer}`).innerText = currentScore);

  }else{
    switchPlayer();
  }

});

btnHoldEl.addEventListener('click', function(){
  // add current score to score
    scores[activePlayer] = scores[activePlayer] + currentScore;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).innerText = currentScore;

    // check if score >=100
    if(scores[activePlayer] >= 10){
      document.getElementById(`player--${activePlayer}`).classList.remove('player--active');
      document.getElementById(`player--${activePlayer}`).classList.add('player--winner');
      Number(document.getElementById(`score--${activePlayer}`).innerText = scores[activePlayer]);


      diceEl.classList.add('hidden');
      btnRollEl.classList.add('hidden');
      btnHoldEl.classList.add('hidden');
    }else{
      switchPlayer();
    }
});

btnNewEL.addEventListener('click', function(){
    init();
});

// initial setup
init();
