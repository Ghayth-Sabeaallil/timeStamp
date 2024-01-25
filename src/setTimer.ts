import timer from "./script";
import { switchScene } from "./switchScene";
import { analogTimerElement } from "./analogTimer";
const timeDisplay = document.getElementById("time-number");

export const setTimerElement: HTMLElement | null = document.querySelector(".set-timer-vy");

/* let timeInt = parseInt(timeDisplay!.textContent || "0"); */
let timeInt;
function increaseTimeFunc() {
    timeInt = parseInt(timeDisplay!.textContent || "0");
    if (timeInt < 60) {
        timeInt += 5;
        timeDisplay!.textContent = `${timeInt}`;
    }
}

function decraseTimeFunc() {
    timeInt = parseInt(timeDisplay!.textContent || "0");
    if (timeInt > 5) {
        timeInt -= 5;
        timeDisplay!.textContent = `${timeInt}`;
    }
}

document.querySelector(".increase-time")!.addEventListener("click", increaseTimeFunc);
document.querySelector(".decrease-time")!.addEventListener("click", decraseTimeFunc);

const startTimerButton: HTMLElement | null = document.querySelector(".start-button");

console.log(startTimerButton);

startTimerButton!.addEventListener("click", function () {
    timer.start({ countdown: true, startValues: { minutes: timeInt }, target: { seconds: 0 } });
    console.log("setting timer to" + timeInt);
    switchScene(setTimerElement!, analogTimerElement!);
    timer.addEventListener('secondsUpdated', function () {
        const timeValues = timer.getTimeValues();
        console.log('Remaining seconds:', timeValues.seconds);
    });
});