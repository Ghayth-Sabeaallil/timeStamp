"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = require("./script");
const timeDisplay = document.getElementById("time-number");
let timeInt = parseInt(timeDisplay.textContent);
function increaseTimeFunc() {
    timeInt = parseInt(timeDisplay.textContent);
    if (timeInt < 60) {
        timeInt += 5;
        timeDisplay.textContent = `${timeInt}`;
    }
    console.log(timeInt);
}
function decraseTimeFunc() {
    timeInt = parseInt(timeDisplay.textContent);
    if (timeInt > 5) {
        timeInt -= 5;
        timeDisplay.textContent = `${timeInt}`;
    }
    console.log(timeInt);
}
document.querySelector(".increase-time").addEventListener("click", increaseTimeFunc);
document.querySelector(".decrease-time").addEventListener("click", decraseTimeFunc);
document.querySelector(".start-button").addEventListener("click", function () {
    script_1.default.start({ countdown: true, startValues: { minutes: timeInt }, target: { seconds: 0 } });
    //console loggar timern
    script_1.default.addEventListener("secondsUpdated", function () {
        const timeValues = script_1.default.getTimeValues();
        console.log(`Remaining time: ${timeValues.minutes}, ${timeValues.seconds}`);
    });
});
