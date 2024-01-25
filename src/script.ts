import Timer from "easytimer.js";
import { noPause } from "./setTimer";


export { showAnalog };
export { showDigital };
export { showSetTimer };
export { showAlarm };
export { showBreak };
export { hideBreak };


const timer = new Timer();
export default timer;

//show the Analog
function showAnalog() {
  hideMenu();
  hideSetTimer();
  showHeader();
  let analog = document.querySelector(".analog-main") as HTMLElement;
  analog.style.display = "flex";
}
//show the Analog
function showVisual() {}

//show the Digital
function showDigital() {
  hideMenu();
  hideSetTimer();
  hideAnalog();
  showHeader();
  let digital = document.querySelector(".digital-main") as HTMLElement;
  digital.style.display = "flex";
}

//show the Alarm
function showAlarm() {
  hideMenu();
  hideSetTimer();
  hideAnalog();
  hideHeader();
  hideDigital();
  let digital = document.querySelector(".alarm-view") as HTMLElement;
  digital.style.display = "flex";
}
//show the Alarm
function hideAlarm() {
  let alarm = document.querySelector(".alarm-view") as HTMLElement;
  alarm.style.display = "none";
}

//show the Breake
function hideBreak() {
  let breake = document.querySelector(".break-view") as HTMLElement;
 
  breake.style.display = "none";
  if (breake.id == "clock") {
    showAnalog();
    noPause();
  }
  if (breake.id == "basicUsage") {
    showDigital();
    noPause();
  }
}

//show the break
function showBreak(type) {
  hideMenu();
  hideSetTimer();
  hideAnalog();
  hideHeader();
  hideDigital();
  let breake = document.querySelector(".break-view") as HTMLElement;
  breake.id=type;
  breake.style.display = "flex";
}
function showHeader() {
  let header = document.querySelector(".header") as HTMLElement;
  header.style.display = "flex";
}

function hideHeader() {
  let header = document.querySelector(".header") as HTMLElement;
  header.style.display = "none";
}

//show the SetTimer
function showSetTimer() {
  hideMenu();
  hideAnalog();
  hideDigital();
  hideHeader();
  hideAlarm();
  hideBreak();
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

//hide the Analog
function hideDigital() {
  let digital = document.querySelector(".digital-main") as HTMLElement;
  digital.style.display = "none";
}
//hide the SetTimer
function hideSetTimer() {
  let setTimer = document.querySelector(".set-timer-vy") as HTMLElement;
  setTimer.style.display = "none";
  document.querySelector("#logo").addEventListener("click", loading);
}

function loading() {
  let loading = document.querySelector(".loading-vy") as HTMLElement;
  let header = document.querySelector(".header") as HTMLElement;
  header.style.display = "none";
  loading.style.display = "none";
  showSetTimer();
}
hideSetTimer();
