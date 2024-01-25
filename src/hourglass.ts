import timer from "./script";

export const hoursglassElement : HTMLElement |null = document.getElementById("hoursglass");

const hourglass : HTMLElement | null = document.querySelector('.hourglass');
const pauseButton : HTMLButtonElement | null = document.getElementById("pauseTimer") as HTMLButtonElement | null;
let timerDuration;


function updateHourglassColor(progress: number) {
    const invertedProgress = 100 - progress;
    hourglass!.style.borderBottom = `${invertedProgress}px solid white`;
  }
  
  
  function onTimerUpdate() {
    const timeValues = timer.getTimeValues();
    
    const progress = (timeValues.minutes * 60 + timeValues.seconds) / (timerDuration / 1000) * 100;
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

    });
  }
  
pauseButton!.addEventListener("click",pauseTimer);

function pauseTimer(){
  //pause da shit
}
  
  startHourglassTimer();

