"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const switchScene_1 = require("./switchScene");
const setTimer_1 = require("./setTimer");
const loadingView = document.querySelector(".loading-vy");
loadingView.addEventListener("click", () => {
    (0, switchScene_1.switchScene)(loadingView, setTimer_1.setTimerElement);
});
