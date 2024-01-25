const path = require('path');

module.exports = {
  entry: {
    easytimer: './node_modules/easytimer.js/dist/easytimer.js',
    script: './dist/js/script.js',
    alarm: './dist/js/alarm.js',
    break: './dist/js/break.js',
    setTimer: "./dist/js/setTimer.js",
    home: "./dist/js/home.js",
    digtalTimer: "./dist/js/digitalTimer.js",
    switchScene: "./dist/js/switchScene.js",
    loading: "./dist/js/loading.js",
    analogTimer: "./dist/js/analogTimer.js",
    hourglass: "./dist/js/hourglass.js",
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};