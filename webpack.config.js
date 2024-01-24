const path = require('path');

module.exports = {
  entry: {
    easytimer: './node_modules/easytimer.js/dist/easytimer.js',
    script: './dist/js/script.js', 
    alarm: './dist/js/alarm.js',
    break: './dist/js/break.js',
    setTimer: './dist/js/setTimer.js',

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
