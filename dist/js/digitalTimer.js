"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.default();
/* const basicUsageDiv = document.getElementById('basicUsage') as HTMLDivElement;
const resetBtn = document.querySelector('.resetBtn') as HTMLButtonElement; */
timer.start({
    countdown: false,
    startValues: { minutes: 0, seconds: 0 },
    target: { minutes: 60, seconds: 0 }
});
timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    const formattedTime = formatTime(timeValues);
    const basicUsageDiv = document.getElementById('basicUsage');
    basicUsageDiv.innerText = formattedTime;
});
function formatTime(timeValues) {
    const minutes = String(timeValues.minutes).padStart(2, '0');
    const seconds = String(timeValues.seconds).padStart(2, '0');
    return `${minutes}:${seconds}`;
}
