import Timer from "easytimer.js";
const timer = new Timer();

timer.start({countdown: true, startValues:{seconds: 30}, target:{seconds: 0}});
