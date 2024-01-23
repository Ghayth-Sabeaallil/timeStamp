//variables
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let btn = document.querySelector(".abrot-timer");
let timerMin = 7;
let iteration = 0;
let angel = 6;
function setTimer(timerMin) {
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
    }
    else {
        sec.style.animationPlayState = "paused";
    }
}
setTimer(timerMin);
