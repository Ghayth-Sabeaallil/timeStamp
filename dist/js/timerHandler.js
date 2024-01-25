"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.default();
exports.default = timer;
document.querySelector(".clock").addEventListener("click", pause);
document.querySelector(".digital-main").addEventListener("click", pause);
document.getElementById("noPauseButton").addEventListener("click", hideBreak);
console.log(document.getElementById("noPauseButton"));
const timeDisplay = document.getElementById("time-number");
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
document.querySelector(".start-button").addEventListener("click", setNewTimer);
function setNewTimer() {
    timer.removeAllEventListeners();
    timer.start({
        countdown: true,
        startValues: { minutes: timeInt },
        target: { seconds: 0 },
    });
    showAnalog();
    timer.addEventListener("secondsUpdated", function () {
        const timeValues = timer.getTimeValues();
        document.querySelector(".digital").innerHTML = `${timeValues.minutes}:${timeValues.seconds}`;
        document.querySelector("#time").innerHTML = `${timeValues.minutes}:${timeValues.seconds}`;
        setTimer(timeValues.seconds);
    });
    timer.addEventListener("targetAchieved", function (e) {
        showAlarm();
    });
}
//variables
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let secAngel = 6;
let minAngel = 6;
function setTimer(secHandle) {
    sec.style.transform = `rotate(${secAngel}deg)`;
    secAngel = secAngel + 6;
    if (secHandle == 0) {
        min.style.transform = `rotate(${minAngel}deg)`;
        minAngel = minAngel + 6;
    }
}
document.querySelector("#analogBtn").addEventListener("click", abrot);
document.querySelector("#digitalBtn").addEventListener("click", abrot);
document.querySelector("#setNewTimer").addEventListener("click", abrot);
document.querySelector(".pauseBtn").addEventListener("click", pause);
//abrot the clock
function abrot() {
    timer.stop();
    sec.style.transform = `rotate(0deg)`;
    min.style.transform = `rotate(0deg)`;
    secAngel = 6;
    showSetTimer();
}
function pause(event) {
    timer.pause();
    console.log("ID när jag pausar:" + event.target.id);
    if (event.target.id === "clock") {
        showBreak(event.target.id);
    }
}
function noPause() {
    timer.start();
}
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
        noPause();
    }
    if (breake.id == "basicUsage") {
        showDigital();
        noPause();
    }
}
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
/** function calAngle(): number {
  let st = window.getComputedStyle(sec, null);
  let tr =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "fail...";

  var values = tr.split("(")[1],
    values = values.split(")")[0];

  var a = values.split(",")[0];
  var b = values.split(",")[1];
  var c = values.split(",")[2];
  var d = values.split(",")[3];

  var radians = Math.atan2(Number(b), Number(a));
  if (radians < 0) {
    radians += 2 * Math.PI;
  }
  let angle = Math.round(radians * (180 / Math.PI));
  return angle;
} //pause the clock
function analogPause() {
  if (sec.style.animationPlayState == "paused") {
    sec.style.animationPlayState = "running";
  } else {
    sec.style.animationPlayState = "paused";
  }
}*/
