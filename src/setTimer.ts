import Timer, { showAnalog, showBreak } from "./script";
import { showSetTimer, showAlarm, hideBreak } from "./script";
export { noPause };

const timer = new Timer();

document.querySelector(".clock").addEventListener("click", pause);
document.querySelector(".digital-main").addEventListener("click", pause);
document.querySelector("#noPause").addEventListener("click", hideBreak);

const timeDisplay = document.getElementById("time-number");
let timeInt = parseInt(timeDisplay.textContent);

function increaseTimeFunc() {
  timeInt = parseInt(timeDisplay.textContent);
  if (timeInt < 60) {
    timeInt += 5;
    timeDisplay.textContent = `${timeInt}`;
  }
}

function decraseTimeFunc() {
  timeInt = parseInt(timeDisplay.textContent);
  if (timeInt > 5) {
    timeInt -= 5;
    timeDisplay.textContent = `${timeInt}`;
  }
}

document
  .querySelector(".increase-time")
  .addEventListener("click", increaseTimeFunc);
document
  .querySelector(".decrease-time")
  .addEventListener("click", decraseTimeFunc);

document.querySelector(".start-button").addEventListener("click", setNewTimer);

function setNewTimer(): void {
  timer.removeAllEventListeners();
  timer.start({
    countdown: true,
    startValues: { minutes: timeInt },
    target: { seconds: 0 },
  });

  showAnalog();
  timer.addEventListener("secondsUpdated", function () {
    const timeValues = timer.getTimeValues();
    document.querySelector(
      ".digital"
    ).innerHTML = `${timeValues.minutes}:${timeValues.seconds}`;
    document.querySelector(
      "#time"
    ).innerHTML = `${timeValues.minutes}:${timeValues.seconds}`;
    setTimer(timeValues.seconds);
  });

  timer.addEventListener("targetAchieved", function (e) {
    showAlarm();
  });
}

//variables
let sec = document.querySelector(".sec") as HTMLElement;
let min = document.querySelector(".min") as HTMLElement;

let secAngel: number = 6;
let minAngel: number = 6;

function setTimer(secHandle: number) {
  sec.style.transform = `rotate(${secAngel}deg)`;
  secAngel = secAngel + 6;
  if (secHandle == 0) {
    min.style.transform = `rotate(${minAngel}deg)`;
    minAngel = minAngel + 6;
  }
}
document.querySelector("#analogBtn").addEventListener("click", abrot);
document.querySelector("#digitalBtn").addEventListener("click", abrot);
document.querySelector("#setNewTimer").addEventListener("click", abrot);
document.querySelector(".pauseBtn").addEventListener("click", pause);

//abrot the clock
function abrot(): void {
  timer.stop();
  sec.style.transform = `rotate(0deg)`;
  min.style.transform = `rotate(0deg)`;
  secAngel = 6;
  showSetTimer();
}

function pause(event) {
  timer.pause();
  showBreak(event.target.id);
}
function noPause() {
  timer.start();
}
/** function calAngle(): number {
  let st = window.getComputedStyle(sec, null);
  let tr =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "fail...";

  var values = tr.split("(")[1],
    values = values.split(")")[0];

  var a = values.split(",")[0];
  var b = values.split(",")[1];
  var c = values.split(",")[2];
  var d = values.split(",")[3];

  var radians = Math.atan2(Number(b), Number(a));
  if (radians < 0) {
    radians += 2 * Math.PI;
  }
  let angle = Math.round(radians * (180 / Math.PI));
  return angle;
} //pause the clock
function analogPause() {
  if (sec.style.animationPlayState == "paused") {
    sec.style.animationPlayState = "running";
  } else {
    sec.style.animationPlayState = "paused";
  }
}*/
