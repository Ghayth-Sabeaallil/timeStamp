import timer from "./script";
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

document.querySelector(".start-button").addEventListener("click", function () {
  timer.start({
    countdown: true,
    startValues: { minutes: timeInt },
    target: { seconds: 0 },
  });

  //console loggar timern
  timer.addEventListener("secondsUpdated", function () {
    const timeValues = timer.getTimeValues();
    console.log(`Remaining time: ${timeValues.minutes}, ${timeValues.seconds}`);
  });
});
