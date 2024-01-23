"use strict";
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
const increaseTime = document.querySelector(".increase-time").addEventListener("click", increaseTimeFunc);
const decreaseTime = document.querySelector(".decrease-time").addEventListener("click", decraseTimeFunc);
