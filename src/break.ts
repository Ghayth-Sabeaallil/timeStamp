import timer from "./script";
import { analogTimerElement } from "./analogTimer";
import { currentId, switchScene } from "./switchScene";
import { digitalTimerElement } from "./digitalTimer";
import { hoursglassElement } from "./hourglass";
const buttonNoPause: HTMLButtonElement | null = document.getElementById("noPause") as HTMLButtonElement | null;

const timeElement: HTMLElement | null = document.getElementById("time");
export const breakViewElement :HTMLElement |null = document.querySelector(".break-view");
function addEventListners() {
    buttonNoPause!.addEventListener("click", goBack);
}

function goBack() {
    if(currentId === "analogClock"){
        switchScene(breakViewElement!,analogTimerElement!);
        timer.start();
    }

    else if(currentId === "timer-display-container"){
        switchScene(breakViewElement!,digitalTimerElement!);
        timer.start();
    }

    else if(currentId === "hourglass"){
        switchScene(breakViewElement!,hoursglassElement!);
        timer.start();
    }
    
}

function updateTime() {

    let minutes: string = timer.getTimeValues().minutes.toString();
    let seconds: string = timer.getTimeValues().seconds.toString();

    timeElement!.textContent = "";

    if (checkTime(minutes)) {
        timeElement!.textContent = minutes;

        if (checkTime(seconds))
            timeElement!.textContent += ".";
    }

    if (checkTime(seconds))
        timeElement!.textContent += seconds;

    CorrectSyntax(minutes, seconds)
}

function checkTime(time: string): boolean {
    if (time != "0")
        return true;
    else
        return false;
}

function CorrectSyntax(minutes: string, seconds: string) {
    // Make correct syntax after the time

    if (checkTime(minutes)) {
        if (minutes === "1" && !checkTime(seconds))
            timeElement!.textContent += " minute";
        else
            timeElement!.textContent += " minutes";
    }
    else
        timeElement!.textContent += " seconds";
}

addEventListners();
updateTime();