"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideBreak = exports.showBreak = exports.showAlarm = exports.showSetTimer = exports.showDigital = exports.showAnalog = void 0;
const easytimer_js_1 = require("easytimer.js");
const timerHandler_1 = require("./timerHandler");
const timer = new easytimer_js_1.default();
exports.default = timer;
const showMenuButton = document.getElementById("showMenuButton");
showMenuButton.addEventListener("click", showMenu);
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
function showVisual() { }
//show the Digital
function showDigital() {
    hideMenu();
    hideSetTimer();
    hideAnalog();
    showHeader();
    let digital = document.querySelector(".digital-main");
    digital.style.display = "flex";
}
exports.showDigital = showDigital;
//show the Alarm
function showAlarm() {
    hideMenu();
    hideSetTimer();
    hideAnalog();
    hideHeader();
    hideDigital();
    let digital = document.querySelector(".alarm-view");
    digital.style.display = "flex";
}
exports.showAlarm = showAlarm;
//show the Alarm
function hideAlarm() {
    let alarm = document.querySelector(".alarm-view");
    alarm.style.display = "none";
}
//show the Breake
function hideBreak() {
    console.log("hide break");
    let breake = document.querySelector(".break-view");
    breake.style.display = "none";
    console.log(breake);
    if (breake.id == "clock") {
        console.log("Ska visa analog");
        showAnalog();
        (0, timerHandler_1.noPause)();
    }
    if (breake.id == "basicUsage") {
        showDigital();
        (0, timerHandler_1.noPause)();
    }
}
exports.hideBreak = hideBreak;
//show the break
function showBreak(type) {
    hideMenu();
    hideSetTimer();
    hideAnalog();
    hideHeader();
    hideDigital();
    let breake = document.querySelector(".break-view");
    breake.id = type;
    breake.style.display = "flex";
}
exports.showBreak = showBreak;
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
    hideAlarm();
    hideBreak();
    let setTimer = document.querySelector(".set-timer-vy");
    setTimer.style.display = "flex";
}
exports.showSetTimer = showSetTimer;
//show the Menu
function showMenu() {
    console.log("Clickade på meny");
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
