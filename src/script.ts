import Timer from "easytimer.js";
const timer = new Timer();

timer.start({countdown: true, startValues:{seconds: 25}, target:{seconds: 0}});

timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    console.log('Remaining seconds:', timeValues.seconds);
});