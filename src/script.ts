import Timer from "easytimer.js";
const timer = new Timer();
export default timer;
export { showAnalog };
export { showSetTimer };

//show the Analog
function showAnalog() {
  hideMenu();
  hideSetTimer();
  showHeader();
  let analog = document.querySelector(".analog-main") as HTMLElement;
  analog.style.display = "flex";
}

//show the Analog
function showDigital() {
  hideMenu();
  hideSetTimer();
  hideAnalog();
  showHeader();
  let digital = document.querySelector(".digital-main") as HTMLElement;
  digital.style.display = "flex";
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
