//variables
let sec = document.querySelector(".sec") as HTMLElement;
let min = document.querySelector(".min") as HTMLElement;
let btn = document.querySelector(".abrot-timer") as HTMLElement;

let timerMin: number = 7;
let iteration: number = 0;
let angel: number = 6;

function setTimer(timerMin: number) {
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

function stop() {
  if (sec.style.animationPlayState === "paused") {
    sec.style.animationPlayState = "running";
  } else {
    sec.style.animationPlayState = "paused";
  }
}
setTimer(timerMin);
