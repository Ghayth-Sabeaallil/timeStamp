import Timer from "easytimer.js";
const timer = new Timer();
export default timer;

//show the Analog
function showAnalog() {
  hideMenu();
  hideSetTimer();
  let analog = document.querySelector(".analog-main") as HTMLElement;
  analog.style.display = "flex";
}

//show the SetTimer
function showSetTimer() {
  hideMenu();
  hideAnalog();
  let setTimer = document.querySelector(".set-timer-vy") as HTMLElement;
  setTimer.style.display = "flex";
}
//show the Menu
function showMenu() {
  let menu = document.querySelector(".timer-options") as HTMLElement;
  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
//hide the Menu
function hideMenu() {
  let menu = document.querySelector(".timer-options") as HTMLElement;
  menu.style.display = "none";
}
//hide the Analog
function hideAnalog() {
  let analog = document.querySelector(".analog-main") as HTMLElement;
  analog.style.display = "none";
}
//hide the SetTimer
function hideSetTimer() {
  let setTimer = document.querySelector(".set-timer-vy") as HTMLElement;
  setTimer.style.display = "none";
}
//variables
let sec = document.querySelector(".sec") as HTMLElement;
let min = document.querySelector(".min") as HTMLElement;
let btn = document.querySelector(".abrot-timer") as HTMLElement;

let timerMin: number = 10;
let iteration: number = 0;
let angel: number = 6;

function setTimer(timerMin: number) {
  sec.style.animation = `secondsMotion ${3}s infinite linear`;
  sec.style.animationIterationCount = timerMin.toString() + 1;
  sec.addEventListener("animationiteration", () => {
    min.style.transform = `rotate(${angel}deg)`;
    angel = angel + 6;
    iteration++;
    if (iteration === timerMin) {
      sec.style.animationPlayState = "paused";
    }
  });
}

//calculate the angle
function calAngle(): number {
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
}
//abrot the clock
function abrot() {
  sec.style.animationPlayState = "paused";
  sec.style.animation = "";
  sec.style.transform = "rotate(0deg)";
  min.style.transform = "rotate(0deg)";
}

setTimer(timerMin);
