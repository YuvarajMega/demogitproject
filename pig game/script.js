"use strict";
//selecting elements to avoid repeating it multiple times

const score0element = document.querySelector("#score--0");
const score1element = document.getElementById("score--1"); //both are different way of selecting ids
const imgselectorone = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScorePlayer1 = document.querySelector("#current--0");
const currentScorePlayer2 = document.getElementById("current--1");
const playerActive0 = document.querySelector(".player--0");
const playerActive1 = document.querySelector(".player--1");

//initialization
let scores = [0, 0]; //first element is score of player 0 and second is score of player 1
let currentScore = 0;
let activeplayer = 0; //here we select the active player who is playing
let holdScore = 0;
let keepPlaying = true;
const switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0; //ternery operator if active player is 0 changes to 1 and vice versa
  currentScore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    currentScore;
  console.log(activeplayer);
  // playerActive0.classList.remove("player--active");
  // playerActive1.classList.add("player--active");here instead of remove add we use toggle
  //toggle is one which can remove the mentioned class if present or add that class it if is not there
  //toggle does both remove and add depents on availablity
  playerActive0.classList.toggle("player--active");
  playerActive1.classList.toggle("player--active");
};

const resetGame = function () {
  keepPlaying = true; //It will decide keep playing or need to finish this game
  console.log("reseted to new game");
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  playerActive0.classList.add("player--active");
  playerActive1.classList.remove("player--active");
  playerActive0.classList.remove("player--winner");
  playerActive1.classList.remove("player--winner");
  score0element.textContent = 0;
  score1element.textContent = 0;
  imgselectorone.classList.add("hidden"); //It will hide the dice at start of game
};

score0element.textContent = 0;
score1element.textContent = 0;
imgselectorone.classList.add("hidden"); //It will hide the dice at start of game

btnRoll.addEventListener("click", function () {
  if (keepPlaying) {
    let secretNumber = Math.trunc(Math.random() * 6) + 1;
    imgselectorone.classList.remove("hidden");
    imgselectorone.src = `dice-${secretNumber}.png`;
    if (secretNumber != 1) {
      currentScore = currentScore + secretNumber;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (keepPlaying) {
    scores[activeplayer] = scores[activeplayer] + currentScore;
    console.log(scores[activeplayer]);
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    console.log("if clause working0");
    if (scores[activeplayer] >= 20) {
      console.log("if clause working");
      keepPlaying = false;
      imgselectorone.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("active--player");
    }
    //switching the player
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  resetGame();
});
