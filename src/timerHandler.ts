import Timer from "easytimer.js";
const timer = new Timer();
export default timer;

document.querySelector(".clock")!.addEventListener("click", pause);
document.querySelector(".digital-main")!.addEventListener("click", pause);
document.getElementById("noPauseButton")!.addEventListener("click", hideBreak);
console.log(document.getElementById("noPauseButton"));
const timeDisplay: HTMLElement | null = document.getElementById("time-number");



// view buttons from menu
const showDigitalButton : HTMLElement |null = document.getElementById("digtalTimerView");

showDigitalButton.addEventListener("click", showDigital);

const showAnalogButton : HTMLElement | null = document.getElementById("analogTimerView");
showAnalogButton.addEventListener("click", showAnalog);


const showVisualTimer : HTMLElement | null = document.getElementById("visualTimerView");
showVisualTimer.addEventListener("click", showVisual);

const pauseFromVisualButton : HTMLElement |null = document.querySelector(".hourglass-view");
pauseFromVisualButton.addEventListener("click",pause);


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

document.querySelector(".start-button")!.addEventListener("click", setNewTimer);

function setNewTimer(): void {
  timer.removeAllEventListeners();
  timer.start({
    countdown: true,
    startValues: { seconds: 10 },
    target: { seconds: 0 },
  });

  showAnalog();
  timer.addEventListener("secondsUpdated", function () {
    const timeValues = timer.getTimeValues();
    document.querySelector(".digital")!.innerHTML = `${timeValues.minutes}:${timeValues.seconds}`;
    document.querySelector("#time")!.innerHTML = `${timeValues.minutes}:${timeValues.seconds}`;
    setTimer(timeValues.seconds);
  });

  timer.addEventListener("targetAchieved", function (e) {
    showAlarm();
  });

  startHourglassTimer();
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
document.querySelector("#analogBtn")!.addEventListener("click", abrot);
document.querySelector("#digitalBtn")!.addEventListener("click", abrot);
document.querySelector("#setNewTimer")!.addEventListener("click", abrot);
document.querySelector(".pauseBtn")!.addEventListener("click", pause);
document.getElementById("pauseTimer")!.addEventListener("click", abrot);
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
  console.log("ID när jag pausar:" + event.target.id);
  if (event.target.id === "clock" || event.target.id === "basicUsage" || event.target.id ==="hourGlass") {
    showBreak(event.target.id);
  }
  document.getElementById("hourGlass").parentElement.style.animationPlayState = "paused";

}
function noPause() {
  timer.start();
}

const showMenuButton: HTMLButtonElement | null = document.getElementById("showMenuButton") as HTMLButtonElement | null;
showMenuButton.addEventListener("click", showMenu);

//show the Analog
function showAnalog() {
  hideMenu();
  hideSetTimer();
  showHeader();
  hideDigital();
  hideHourglass();
  let analog = document.querySelector(".analog-main") as HTMLElement;
  analog.style.display = "flex";
}
//show the Analog
function showVisual() {
  hideMenu();
  hideSetTimer();
  hideAnalog();
  showHeader();
  hideDigital();
  let visual: HTMLElement | null = document.querySelector(".hourglass-view")
  visual.style.display ="flex";
 }

//show the Digital
function showDigital() {
  hideMenu();
  hideSetTimer();
  hideAnalog();
  showHeader();
  hideHourglass();
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
  console.log("hide break");
  let breake = document.querySelector(".break-view") as HTMLElement;
  console.log("Startar animation");
 

  breake.style.display = "none";
  console.log(breake);
  if (breake.id === "clock") {
    console.log("Ska visa analog");
    showAnalog();
    noPause();
  }
  if (breake.id === "basicUsage") {
    showDigital();
    noPause();
  }

  if(breake.id === "hourGlass")
  {
    showVisual();
    noPause();
    
  }
}


function hideHourglass() {
  const hourglassEl: HTMLElement | null = document.querySelector(".hourglass-view");
  hourglassEl.style.display = "none";
}
//show the break
function showBreak(type) {
  hideMenu();
  hideSetTimer();
  hideAnalog();
  hideHeader();
  hideDigital();
  hideHourglass();
  let breake = document.querySelector(".break-view") as HTMLElement;
  breake.id = type;
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
  hideHourglass();
  let setTimer = document.querySelector(".set-timer-vy") as HTMLElement;
  setTimer.style.display = "flex";
}
//show the Menu
function showMenu() {
  console.log("Clickade på meny");
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



// Hourglass

const hourglass: HTMLElement | null = document.querySelector('.hourglass');
const pauseButton: HTMLButtonElement | null = document.getElementById("pauseTimer") as HTMLButtonElement | null;
let timerDuration;


function updateHourglassColor(progress: number) {
  const invertedProgress = 100 - progress;
  hourglass!.style.borderBottom = `${invertedProgress}px solid white`;
}


function onTimerUpdate() {
  const timeValues = timer.getTimeValues();

  const progress = (timeValues.minutes * 60 + timeValues.seconds) / (timerDuration / 1000) * 100;
  console.log(progress);
  updateHourglassColor(progress);
}

function startHourglassTimer() {
  timerDuration = (timer.getTimeValues().minutes * 60 + timer.getTimeValues().seconds) * 1000;
  const animationDurationInSeconds = timerDuration / 1000;
  const hourglassElement: HTMLElement | null = document.querySelector('.hourglass');
  if (hourglassElement) {
    hourglassElement.style.animationDuration = `${animationDurationInSeconds}s`;
  }

  timer.start({
    countdown: true,
    startValues: { seconds: timerDuration / 1000 },
    target: { seconds: 0 },
  });

  timer.addEventListener('secondsUpdated', onTimerUpdate);
  timer.addEventListener('targetAchieved', () => {
      hideHourglass();
  });
}

pauseButton.addEventListener("click", pauseTimer);

function pauseTimer() {
  //pause da shit
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
