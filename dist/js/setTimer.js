"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timeDisplay = document.getElementById("time-number");
function increaseTimeFunc() {
    let timeInt = parseInt(timeDisplay.textContent);
    if (timeInt < 60) {
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
const increaseTime = document.querySelector(".increase-time");
const decreaseTime = document.querySelector(".decrease-time");
increaseTime.addEventListener("click", increaseTimeFunc);
decreaseTime.addEventListener("click", decraseTimeFunc);
