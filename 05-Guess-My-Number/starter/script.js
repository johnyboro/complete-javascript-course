"use strict";
/*
console.log(document.querySelector(".message").textContent);

const logValue = function () {
  console.log(document.querySelector(`.guess`).value);
};
document
  .querySelector(`.check`)
  .addEventListener(`click`, () =>
    console.log(document.querySelector(`.guess`).value)
  );
function logValue2() {
  console.log(document.querySelector(`.guess`).value);
}
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`❌ No number :(`);
  } else if (guess === secretNumber) {
    displayMessage(`✅ Correct number`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `🔥 Too high!` : `🧊 Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`skibi-died`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = `?`;
  score = 20;
  document.querySelector(`.score`).textContent = score;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).value = ``;
});
