const timeDisplay = document.getElementById("time-number");

import Timer from "easytimer.js";
const timer = new Timer();

timer.start({ countdown: true, startValues: { seconds: 30 }, target: { seconds: 0 } });
console.log(timer);

function increaseTimeFunc() {
  let timeInt = parseInt(timeDisplay.textContent);
  if (timeInt! < 60) {
    timeInt += 5;
    timeDisplay.textContent = `${timeInt}`;
  }
}

function decraseTimeFunc() {
  let timeInt = parseInt(timeDisplay.textContent);
  if (timeInt > 5) {
    timeInt -= 5;
    timeDisplay.textContent = `${timeInt}`;
  }
}

const increaseTime = document.querySelector(".increase-time").addEventListener("click", increaseTimeFunc);
const decreaseTime = document.querySelector(".decrease-time").addEventListener("click", decraseTimeFunc);
