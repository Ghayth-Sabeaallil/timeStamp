const buttonNoPause: HTMLButtonElement | null = document.getElementById("noPause") as HTMLButtonElement | null;

function addEventListners(){
    buttonNoPause.addEventListener("click", goBack);
}

function goBack(){
    console.log("Hello");
}

addEventListners();