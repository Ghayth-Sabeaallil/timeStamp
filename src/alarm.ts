import timer from "./script";

const buttonSetNewTimer: HTMLButtonElement | null = document.getElementById("setNewTimer") as HTMLButtonElement | null;

function addEventListners(){
    buttonSetNewTimer!.addEventListener("click", newTimer);
}

function newTimer(){
    // Switch page
}

addEventListners();