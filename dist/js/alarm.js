const buttonSetNewTimer = document.getElementById("setNewTimer");
function addEventListners() {
    buttonSetNewTimer.addEventListener("click", newTimer);
}
function newTimer() {
    console.log("Hello");
}
addEventListners();
