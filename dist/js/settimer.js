"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = require("./script");
const timeDisplay = document.getElementById("time-number");
let timeInt;
function increaseTimeFunc() {
    timeInt = parseInt(timeDisplay.textContent);
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
function starTimer() {
    console.log("start timer");
    script_1.default.start({ countdown: true, startValues: { minutes: timeInt }, target: { seconds: 0 } });
    script_1.default.addEventListener("secondsUpdated", function () {
        const timeValues = script_1.default.getTimeValues();
        console.log(`Remaining time: ${timeValues.minutes}, ${timeValues.seconds}`);
    });
    console.log("start timer end");
}
const increaseTime = document.querySelector(".increase-time");
const decreaseTime = document.querySelector(".decrease-time");
const startBtn = document.querySelector(".start-button");
increaseTime.addEventListener("click", increaseTimeFunc);
decreaseTime.addEventListener("click", decraseTimeFunc);
startBtn.addEventListener("click", starTimer);
