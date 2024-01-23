const timeDisplay = document.getElementById("time-number");
import timer from "./script";
function increaseTimeFunc() {
  let timeInt = parseInt(timeDisplay.textContent);
  if (timeInt! < 60) {
    timeInt += 5;
    timeDisplay.textContent = `${timeInt}`;
  }
}

function decraseTimeFunc() {
  let timeInt = parseInt(timeDisplay.textContent);
  if (timeInt > 5) {
    timeInt -= 5;
    timeDisplay.textContent = `${timeInt}`;
  }
}

const increaseTime: HTMLElement | null  = document.querySelector(".increase-time");
const decreaseTime: HTMLElement | null = document.querySelector(".decrease-time");

increaseTime.addEventListener("click",increaseTimeFunc);
decreaseTime.addEventListener("click",decraseTimeFunc);