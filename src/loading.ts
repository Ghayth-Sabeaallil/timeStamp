import { switchScene } from "./switchScene";
import { setTimerElement } from "./setTimer";

const loadingView : HTMLElement | null = document.querySelector(".loading-vy");


loadingView!.addEventListener("click", () => {
    
    switchScene(loadingView!,setTimerElement!);
} );

