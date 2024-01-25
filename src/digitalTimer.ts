import timer from "./script"
/* const basicUsageDiv = document.getElementById('basicUsage') as HTMLDivElement;
const resetBtn = document.querySelector('.resetBtn') as HTMLButtonElement; */

export const digitalTimerElement : HTMLElement |null = document.getElementById("timer-display-container");



timer.start({
    countdown: false,
    startValues: { minutes: 0, seconds: 0 },
    target: { minutes: 60, seconds: 0 }
});

timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    const formattedTime = formatTime(timeValues);
    
    const basicUsageDiv = document.getElementById('basicUsage') as HTMLDivElement;
    basicUsageDiv.innerText = formattedTime;
});

function formatTime(timeValues: { minutes: number, seconds: number }): string {
    const minutes = String(timeValues.minutes).padStart(2, '0');
    const seconds = String(timeValues.seconds).padStart(2, '0');
    return `${minutes}:${seconds}`;
}