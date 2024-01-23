
class Timer {
    private name: string;

        constructor(name: string){
            this.name = name;
        }

        //display the timer content
        displayContent(): void {
            const content = `<div>${this.name} Timer Content comes here </div>`;


            const timerDisplayContainer = document.getElementById('timer-display-container');
            if(timerDisplayContainer) {
                timerDisplayContainer.innerHTML = content;
            }
        }
    }


//function for click events

function handleTimerClick(event: Event): void {
    event.preventDefault();

    const timerId = (event.target as HTMLAnchorElement).id;


    const selectedTimer = new Timer(timerId);

    selectedTimer.displayContent();
}


document.getElementById('analog-timer')?.addEventListener('click', handleTimerClick);