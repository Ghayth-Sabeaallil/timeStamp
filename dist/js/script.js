"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.default();
exports.default = timer;
//show the Analog
function showAnalog() {
    hideMenu();
    hideSetTimer();
    let analog = document.querySelector(".analog-main");
    analog.style.display = "flex";
}
//show the SetTimer
function showSetTimer() {
    hideMenu();
    hideAnalog();
    let setTimer = document.querySelector(".set-timer-vy");
    setTimer.style.display = "flex";
}
//show the Menu
function showMenu() {
    let menu = document.querySelector(".timer-options");
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}
//hide the Menu
function hideMenu() {
    let menu = document.querySelector(".timer-options");
    menu.style.display = "none";
}
//hide the Analog
function hideAnalog() {
    let analog = document.querySelector(".analog-main");
    analog.style.display = "none";
}
//hide the SetTimer
function hideSetTimer() {
    let setTimer = document.querySelector(".set-timer-vy");
    setTimer.style.display = "none";
}
