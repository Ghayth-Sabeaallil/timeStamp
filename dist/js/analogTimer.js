"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analogTimerElement = void 0;
const switchScene_1 = require("./switchScene");
const break_1 = require("./break");
//variables
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let btn = document.querySelector(".abrot-timer");
let timerMin = 10;
let iteration = 0;
let angel = 6;
exports.analogTimerElement = document.querySelector(".analog-main");
const pauseButton = document.querySelector(".clock");
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.addEventListener("click", analogPause);
function setTimer(timerMin) {
    sec.style.animation = `secondsMotion ${3}s infinite linear`;
    sec.style.animationIterationCount = timerMin.toString() + 1;
    sec.addEventListener("animationiteration", () => {
        min.style.transform = `rotate(${angel}deg)`;
        angel = angel + 6;
        iteration++;
        if (iteration === timerMin) {
            sec.style.animationPlayState = "paused";
        }
    });
}
//calculate the angle
function calAngle() {
    let st = window.getComputedStyle(sec, null);
    let tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "fail...";
    var values = tr.split("(")[1], values = values.split(")")[0];
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
}
//show the Analog
function showAnalog() {
    let analog = document.querySelector(".analog-main");
    analog.style.display = "flex";
}
//hide the Analog
function hideAnalog() {
    let analog = document.querySelector(".analog-main");
    analog.style.display = "none";
}
//pause the clock
function analogPause() {
    (0, switchScene_1.switchScene)(exports.analogTimerElement, break_1.breakViewElement);
    if (sec.style.animationPlayState == "paused") {
        sec.style.animationPlayState = "running";
    }
    else {
        sec.style.animationPlayState = "paused";
    }
}
//abrot the clock
function abrot() {
    sec.style.animationPlayState = "paused";
    sec.style.animation = "";
    sec.style.transform = "rotate(0deg)";
    min.style.transform = "rotate(0deg)";
}
function test() {
    showAnalog();
}
setTimer(timerMin);
