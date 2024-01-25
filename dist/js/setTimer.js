"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimerElement = void 0;
const script_1 = require("./script");
const switchScene_1 = require("./switchScene");
const analogTimer_1 = require("./analogTimer");
const timeDisplay = document.getElementById("time-number");
exports.setTimerElement = document.querySelector(".set-timer-vy");
/* let timeInt = parseInt(timeDisplay!.textContent || "0"); */
let timeInt;
function increaseTimeFunc() {
    timeInt = parseInt(timeDisplay.textContent || "0");
    if (timeInt < 60) {
        timeInt += 5;
        timeDisplay.textContent = `${timeInt}`;
    }
}
function decraseTimeFunc() {
    timeInt = parseInt(timeDisplay.textContent || "0");
    if (timeInt > 5) {
        timeInt -= 5;
        timeDisplay.textContent = `${timeInt}`;
    }
}
document.querySelector(".increase-time").addEventListener("click", increaseTimeFunc);
document.querySelector(".decrease-time").addEventListener("click", decraseTimeFunc);
const startTimerButton = document.querySelector(".start-button");
console.log(startTimerButton);
startTimerButton.addEventListener("click", function () {
    script_1.default.start({ countdown: true, startValues: { minutes: timeInt }, target: { seconds: 0 } });
    console.log("setting timer to" + timeInt);
    (0, switchScene_1.switchScene)(exports.setTimerElement, analogTimer_1.analogTimerElement);
    script_1.default.addEventListener('secondsUpdated', function () {
        const timeValues = script_1.default.getTimeValues();
        console.log('Remaining seconds:', timeValues.seconds);
    });
});
