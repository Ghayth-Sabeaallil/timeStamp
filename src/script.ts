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
