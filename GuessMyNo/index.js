//1. Node Referenece
let again = document.querySelector(".again");
const number = document.querySelector(".number");
let guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
// console.log(again, number, guess, check, message, score, highScore);

// 2.Generate Random Number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let scores = 20;

// 3.Click on check button

const checkFunction = () => {
  let guessValue = Number(guess.value);
  console.log(guessValue);
  // 3.1.1 check score is greater than 0 or not

  // 3.2 if number is correct
  if (guessValue === 0) {
    message.innerHTML = "Enter a value";
  } else if (guessValue === randomNumber) {
    // 3.2.1 correct answer is shown in message
    message.innerHTML = "Correct value";

    // 3.2.2 instead of Question mark we have to put random Value.
    number.innerHTML = randomNumber;
    // 3.2.3 change the highscore value with score value.

    // 3.2.3.1 check value is grater then prev value or not if yes then we can
    // put the value
    if (Number(highScore.innerHTML) < Number(score.innerHTML)) {
      highScore.innerHTML = scores;
    }
    // We have to change the bodycolor to green
    document.querySelector("body").style.backgroundColor = "green";
  } else if (randomNumber > guessValue) {
    // 3.3 if number is low
    message.innerHTML = "too low";

    // 3.3.1 show too low
    // 3.3.2 we decerement the score by 1
    scores--;
    score.innerHTML = scores;
  } else if (randomNumber < guessValue) {
    // 3.3 if number is high
    message.innerHTML = "too High";
    // 3.3.1 show too High
    // 3.3.2 we decerement the score by 1
    scores--;
    score.innerHTML = scores;
  }
};

check.addEventListener("click", checkFunction);
const init = () => {
  // 4.1 Put the last game game score in highscore
  // 4.1 generate a random number
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber, "agian");
  scores = 20;
  // 4.2 score value should be 20
  score.innerHTML = 20;
  // 4.3 show message Start guessing...
  message.innerHTML = "Start guessing...";
  // 4.4 body color to black
  document.querySelector("body").style.backgroundColor = "black";
  // 4.5 put the question mark instead of random number
  number.innerHTML = "?";
};

// 4. User click on agin button
again.addEventListener("click", init);
