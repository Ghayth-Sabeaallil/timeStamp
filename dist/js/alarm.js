"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = require("./script");
const script_2 = require("./script");
const buttonSetNewTimer = document.getElementById("setNewTimer");
function addEventListners() {
    buttonSetNewTimer.addEventListener("click", newTimer);
}
function newTimer() {
    (0, script_1.stopTimer)();
}
addEventListners();
script_2.default.start();
