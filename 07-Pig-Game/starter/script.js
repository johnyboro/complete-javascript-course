"use strict";

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`); //uniwersal but slower
const score1El = document.getElementById(`score--1`); //slightly faster
const diceEl = document.querySelector(`.dice`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`curren--1`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isFirstRoll = true;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  isFirstRoll = true;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

score0El.textContent = scores[0];
score1El.textContent = scores[1];
diceEl.classList.add(`hidden`);

btnRoll.addEventListener(`click`, function () {
  if (playing) {
    let number = 0;
    if (isFirstRoll) {
      do {
        number = Math.trunc(Math.random() * 6) + 1;
      } while (number === 1);
      isFirstRoll = false;
    } else {
      number = Math.trunc(Math.random() * 6) + 1;
    }

    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${number}.png`;

    if (number !== 1) {
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, function () {
  if (!playing) {
    playing = true;
    currentScore = 0;
    score0El.textContent = scores[0] = 0;
    score1El.textContent = scores[1] = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--winner`);
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add(`player--active`);
    isFirstRoll = true;
  }
});
