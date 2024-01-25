"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalTimerElement = void 0;
const script_1 = require("./script");
/* const basicUsageDiv = document.getElementById('basicUsage') as HTMLDivElement;
const resetBtn = document.querySelector('.resetBtn') as HTMLButtonElement; */
exports.digitalTimerElement = document.getElementById("timer-display-container");
script_1.default.start({
    countdown: false,
    startValues: { minutes: 0, seconds: 0 },
    target: { minutes: 60, seconds: 0 }
});
script_1.default.addEventListener('secondsUpdated', function () {
    const timeValues = script_1.default.getTimeValues();
    const formattedTime = formatTime(timeValues);
    const basicUsageDiv = document.getElementById('basicUsage');
    basicUsageDiv.innerText = formattedTime;
});
function formatTime(timeValues) {
    const minutes = String(timeValues.minutes).padStart(2, '0');
    const seconds = String(timeValues.seconds).padStart(2, '0');
    return `${minutes}:${seconds}`;
}
