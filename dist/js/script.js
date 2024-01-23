"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetTimer = exports.stopTimer = void 0;
const easytimer_js_1 = require("easytimer.js");
const timer = new easytimer_js_1.default();
timer.start({ countdown: true, startValues: { seconds: 30 }, target: { seconds: 0 } });
timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    console.log('Remaining seconds:', timeValues.seconds);
});
function stopTimer() {
    console.log("stop timer");
    timer.stop();
}
exports.stopTimer = stopTimer;
function resetTimer() {
    timer.reset();
}
exports.resetTimer = resetTimer;
