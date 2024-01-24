"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//variables
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let btn = document.querySelector(".abrot-timer");
let timerMin = 10;
let iteration = 0;
let angel = 6;
function setTimer(timerMin) {
    sec.style.animation = `secondsMotion ${60}s infinite linear`;
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
} //pause the clock
function analogPause() {
    if (sec.style.animationPlayState == "paused") {
        sec.style.animationPlayState = "running";
    }
    else {
        sec.style.animationPlayState = "paused";
    }
}
//abrot the clock
function abrot() {
    console.log("hi");
}
