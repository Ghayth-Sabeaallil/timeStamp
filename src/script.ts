import Timer from "easytimer.js";

const timer = new Timer();

<<<<<<< HEAD
timer.start({countdown: true, startValues:{minutes: 1, seconds: 5}, target:{seconds: 0}});

timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    console.log('Remaining seconds:', timeValues.seconds);
});



=======
timer.start({countdown: true, startValues:{seconds: 30}, target:{seconds: 0}});

timer.addEventListener('secondsUpdated', function () {
    const timeValues = timer.getTimeValues();
    console.log('Remaining seconds:', timeValues.seconds);
});

export function stopTimer(){
    console.log("stop timer");
    timer.stop();
 }

export function resetTimer(){
    timer.reset();
}

>>>>>>> c21877237d88a5fd1947fefdaac9ea02389fae30
export default timer;