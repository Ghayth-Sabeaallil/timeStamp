"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakViewElement = void 0;
const script_1 = require("./script");
const analogTimer_1 = require("./analogTimer");
const switchScene_1 = require("./switchScene");
const buttonNoPause = document.getElementById("noPause");
const timeElement = document.getElementById("time");
exports.breakViewElement = document.querySelector(".break-view");
function addEventListners() {
    buttonNoPause.addEventListener("click", goBack);
}
function goBack() {
    (0, switchScene_1.switchScene)(exports.breakViewElement, analogTimer_1.analogTimerElement);
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
