"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimerElement = void 0;
const script_1 = require("./script");
const switchScene_1 = require("./switchScene");
const analogTimer_1 = require("./analogTimer");
const timeDisplay = document.getElementById("time-number");
exports.setTimerElement = document.querySelector(".set-timer-vy");
console.log(exports.setTimerElement);
let timeInt = parseInt(timeDisplay.textContent || "0");
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
document.querySelector(".start-button").addEventListener("click", function () {
    script_1.default.start({ countdown: true, startValues: { minutes: timeInt }, target: { seconds: 0 } });
    (0, switchScene_1.switchScene)(exports.setTimerElement, analogTimer_1.analogTimerElement);
});
