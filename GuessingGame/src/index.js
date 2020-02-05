const form = document.querySelector(".js-form"),
  guessing = document.querySelector(".js-guessing"),
  result = document.querySelector(".js-result"),
  range = document.querySelector(".js-range"),
  max = document.querySelector(".js-max"),
  input = form.querySelector("input"),
  button = form.querySelector("button");

let maxValue = 10;

function showResult(compare) {
  if (compare === 0) {
    result.innerText = "You Win!";
  } else {
    result.innerText = "You Lose!";
  }
}

function playStart(currentValue) {
  let randomValue = Math.round(Math.random() * maxValue);
  guessing.innerText = `You chose: ${currentValue}, the machine chose: ${randomValue}`;
  showResult(currentValue - randomValue);
}

function handleSubmit(event) {
  event.preventDefault();
  let currentValue = input.value;
  if (currentValue <= maxValue) {
    playStart(currentValue);
  }
}

function askNumber() {
  form.addEventListener("submit", handleSubmit);
}

function handleRangeChange(event) {
  maxValue = event.target.value;
  max.innerText = `Generate a number between 0 and ${maxValue}`;
}

function init() {
  max.innerText = `Generate a number between 0 and ${maxValue}`;
  range.addEventListener("input", handleRangeChange);
  askNumber();
}

init();
