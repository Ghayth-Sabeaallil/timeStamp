const buttonNoPause = document.getElementById("noPause");
function addEventListners() {
    buttonNoPause.addEventListener("click", goBack);
}
function goBack() {
    console.log("Hello");
}
addEventListners();
