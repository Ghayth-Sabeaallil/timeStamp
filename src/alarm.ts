const buttonSetNewTimer: HTMLButtonElement | null = document.getElementById("setNewTimer") as HTMLButtonElement | null;

function addEventListners(){
    buttonSetNewTimer!.addEventListener("click", newTimer);
}

function newTimer(){
    console.log("Hello");
}

addEventListners();