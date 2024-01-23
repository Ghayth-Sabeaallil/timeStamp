"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("test");
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.Timer();
timer.addEventListener("secondsUpdated", function () {
    const timeValues = timer.getTimeValues();
    console.log("Remaining seconds:", timeValues.seconds);
});
