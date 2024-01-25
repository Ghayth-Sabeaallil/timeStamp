"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakViewElement = void 0;
const script_1 = require("./script");
const analogTimer_1 = require("./analogTimer");
const switchScene_1 = require("./switchScene");
const digitalTimer_1 = require("./digitalTimer");
const hourglass_1 = require("./hourglass");
const buttonNoPause = document.getElementById("noPause");
const timeElement = document.getElementById("time");
exports.breakViewElement = document.querySelector(".break-view");
function addEventListners() {
    buttonNoPause.addEventListener("click", goBack);
}
function goBack() {
    if (switchScene_1.currentId === "analogClock") {
        (0, switchScene_1.switchScene)(exports.breakViewElement, analogTimer_1.analogTimerElement);
        script_1.default.start();
    }
    else if (switchScene_1.currentId === "timer-display-container") {
        (0, switchScene_1.switchScene)(exports.breakViewElement, digitalTimer_1.digitalTimerElement);
        script_1.default.start();
    }
    else if (switchScene_1.currentId === "hourglass") {
        (0, switchScene_1.switchScene)(exports.breakViewElement, hourglass_1.hoursglassElement);
        script_1.default.start();
    }
}
function updateTime() {
    let minutes = script_1.default.getTimeValues().minutes.toString();
    let seconds = script_1.default.getTimeValues().seconds.toString();
    timeElement.textContent = "";
    if (checkTime(minutes)) {
        timeElement.textContent = minutes;
        if (checkTime(seconds))
            timeElement.textContent += ".";
    }
    if (checkTime(seconds))
        timeElement.textContent += seconds;
    CorrectSyntax(minutes, seconds);
}
function checkTime(time) {
    if (time != "0")
        return true;
    else
        return false;
}
function CorrectSyntax(minutes, seconds) {
    // Make correct syntax after the time
    if (checkTime(minutes)) {
        if (minutes === "1" && !checkTime(seconds))
            timeElement.textContent += " minute";
        else
            timeElement.textContent += " minutes";
    }
    else
        timeElement.textContent += " seconds";
}
addEventListners();
updateTime();
