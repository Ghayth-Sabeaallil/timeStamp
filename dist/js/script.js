"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.default();
timer.start({ countdown: true, startValues: { minutes: 1, seconds: 5 }, target: { seconds: 0 } });
timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    console.log('Remaining seconds:', timeValues.seconds);
});
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.default();
exports.default = timer;
