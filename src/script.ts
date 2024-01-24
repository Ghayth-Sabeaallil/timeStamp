import Timer from "easytimer.js";

const timer = new Timer();

timer.start({countdown: true, startValues:{minutes: 1, seconds: 5}, target:{seconds: 0}});

timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    console.log('Remaining seconds:', timeValues.seconds);
});



export default timer;