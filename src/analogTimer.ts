import { switchScene } from "./switchScene";
import { breakViewElement } from "./break";
import { setTimerElement } from "./setTimer";
import timer from "./script";
//variables
let sec = document.querySelector(".sec") as HTMLElement;
let min = document.querySelector(".min") as HTMLElement;
let btn = document.querySelector(".abrot-timer") as HTMLElement;

let timerMin: number = 10;
let iteration: number = 0;
let angel: number = 6;

export const analogTimerElement: HTMLElement | null = document.querySelector(".analog-main");
const pauseButton : HTMLButtonElement |null = document.querySelector(".clock");
pauseButton?.addEventListener("click",analogPause);
const abortButton : HTMLElement | null = document.querySelector(".abrot-timer-analog");

abortButton?.addEventListener("click", abrot);


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
}

//show the Analog
function showAnalog() {
  let analog = document.querySelector(".analog-main") as HTMLElement;
  analog.style.display = "flex";
}

//hide the Analog
function hideAnalog() {
  let analog = document.querySelector(".analog-main") as HTMLElement;
  analog.style.display = "none";
}

//pause the clock
function analogPause() {
    timer.pause();
    switchScene(analogTimerElement!,breakViewElement!); 
  if (sec.style.animationPlayState == "paused") {
    sec.style.animationPlayState = "running";
  } else {
    sec.style.animationPlayState = "paused";
  }
}
//abrot the clock
function abrot() {
    timer.removeAllEventListeners();
    switchScene(analogTimerElement!,setTimerElement!);
  sec.style.animationPlayState = "paused";
  sec.style.animation = "";
  sec.style.transform = "rotate(0deg)";
  min.style.transform = "rotate(0deg)";
}

function test() {
  showAnalog();
}
setTimer(timerMin);