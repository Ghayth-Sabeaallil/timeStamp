"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAlarm = exports.showSetTimer = exports.showAnalog = void 0;
const easytimer_js_1 = require("easytimer.js");
exports.default = easytimer_js_1.default;
document.querySelector(".clock").addEventListener("click", showBreak);
document.querySelector(".digital-main").addEventListener("click", showBreak);
document.querySelector("#noPause").addEventListener("click", hideBreak);
//show the Analog
function showAnalog() {
    hideMenu();
    hideSetTimer();
    showHeader();
    let analog = document.querySelector(".analog-main");
    analog.style.display = "flex";
}
exports.showAnalog = showAnalog;
//show the Digital
function showDigital() {
    hideMenu();
    hideSetTimer();
    hideAnalog();
    showHeader();
    let digital = document.querySelector(".digital-main");
    digital.style.display = "flex";
}
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
    let breake = document.querySelector(".break-view");
    breake.style.display = "none";
    showHeader();
}
//show the break
function showBreak() {
    hideMenu();
    hideSetTimer();
    hideAnalog();
    hideHeader();
    hideDigital();
    let breake = document.querySelector(".break-view");
    breake.style.display = "flex";
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
    hideAlarm();
    hideBreak();
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
