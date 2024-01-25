import timer from "./script";
import { switchScene } from "./switchScene";
import { analogTimerElement } from "./analogTimer";
const timeDisplay = document.getElementById("time-number");

export const setTimerElement :HTMLElement | null = document.querySelector(".set-timer-vy");
console.log(setTimerElement);

let timeInt = parseInt(timeDisplay!.textContent || "0");

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

document.querySelector(".start-button")!.addEventListener("click", function () {
  timer.start({ countdown: true, startValues: { minutes: timeInt }, target: { seconds: 0 } });

  switchScene(setTimerElement!,analogTimerElement!);
  
});