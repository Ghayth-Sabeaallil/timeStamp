var _a;
class Timer {
    constructor(name) {
        this.name = name;
    }
    //display the timer content
    displayContent() {
        const content = `<div>${this.name} Timer Content Goes Here</div>`;
        const timerDisplayContainer = document.getElementById('timer-display-container');
        if (timerDisplayContainer) {
            timerDisplayContainer.innerHTML = content;
        }
    }
}
//function for click events
function handleTimerClick(event) {
    event.preventDefault();
    const timerId = event.target.id;
    const selectedTimer = new Timer(timerId);
    selectedTimer.displayContent();
}
(_a = document.getElementById('analog-timer')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleTimerClick);
