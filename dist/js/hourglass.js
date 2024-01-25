"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoursglassElement = void 0;
const script_1 = require("./script");
exports.hoursglassElement = document.getElementById("hoursglass");
const hourglass = document.querySelector('.hourglass');
const pauseButton = document.getElementById("pauseTimer");
let timerDuration;
function updateHourglassColor(progress) {
    const invertedProgress = 100 - progress;
    hourglass.style.borderBottom = `${invertedProgress}px solid white`;
}
function onTimerUpdate() {
    const timeValues = script_1.default.getTimeValues();
    const progress = (timeValues.minutes * 60 + timeValues.seconds) / (timerDuration / 1000) * 100;
    updateHourglassColor(progress);
}
function startHourglassTimer() {
    timerDuration = (script_1.default.getTimeValues().minutes * 60 + script_1.default.getTimeValues().seconds) * 1000;
    const animationDurationInSeconds = timerDuration / 1000;
    const hourglassElement = document.querySelector('.hourglass');
    if (hourglassElement) {
        hourglassElement.style.animationDuration = `${animationDurationInSeconds}s`;
    }
    script_1.default.start({
        countdown: true,
        startValues: { seconds: timerDuration / 1000 },
        target: { seconds: 0 },
    });
    script_1.default.addEventListener('secondsUpdated', onTimerUpdate);
    script_1.default.addEventListener('targetAchieved', () => {
    });
}
pauseButton.addEventListener("click", pauseTimer);
function pauseTimer() {
    //pause da shit
}
startHourglassTimer();
