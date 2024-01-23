class TimerHandler {
    constructor() {
      this.addEventListeners();
    }
  
    addEventListeners() {
      const timerLinks = document.querySelectorAll('.timer-options a');
  
      timerLinks.forEach(link => {
        link.addEventListener('click', this.handleTimerClick.bind(this));
      });
    }
  
    handleTimerClick(event) {
      event.preventDefault();
  
      const timerId = event.target.id;
      this.navigateToTimer(timerId);
    }
  
    navigateToTimer(timerId) {
      console.log(`Navigating to ${timerId}`);
  
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new TimerHandler();
  });
  