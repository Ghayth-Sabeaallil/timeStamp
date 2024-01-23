import { Timer } from "easytimer.js";
const timer = new Timer();

timer.addEventListener("secondsUpdated", function () {
  const timeValues = timer.getTimeValues();
  console.log("Remaining seconds:", timeValues.seconds);
});
