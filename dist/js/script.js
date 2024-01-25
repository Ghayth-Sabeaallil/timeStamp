"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showSetTimer = exports.showAnalog = void 0;
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.default();
exports.default = timer;
//show the Analog
function showAnalog() {
    hideMenu();
    hideSetTimer();
    showHeader();
    let analog = document.querySelector(".analog-main");
    analog.style.display = "flex";
}
exports.showAnalog = showAnalog;
//show the Analog
function showDigital() {
    hideMenu();
    hideSetTimer();
    hideAnalog();
    showHeader();
    let digital = document.querySelector(".digital-main");
    digital.style.display = "flex";
}
function showHeader() {
    let header = document.querySelector(".header");
    header.style.display = "flex";
}
function hideHeader() {
    let header = document.querySelector(".header");
    header.style.display = "none";
}
//show the SetTimer
function showSetTimer() {
    hideMenu();
    hideAnalog();
    hideDigital();
    hideHeader();
    let setTimer = document.querySelector(".set-timer-vy");
    setTimer.style.display = "flex";
}
exports.showSetTimer = showSetTimer;
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
//hide the Analog
function hideDigital() {
    let digital = document.querySelector(".digital-main");
    digital.style.display = "none";
}
//hide the SetTimer
function hideSetTimer() {
    let setTimer = document.querySelector(".set-timer-vy");
    setTimer.style.display = "none";
    document.querySelector("#logo").addEventListener("click", loading);
}
function loading() {
    let loading = document.querySelector(".loading-vy");
    let header = document.querySelector(".header");
    header.style.display = "none";
    loading.style.display = "none";
    showSetTimer();
}
hideSetTimer();
