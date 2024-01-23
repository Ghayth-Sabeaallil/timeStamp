const path = require('path');

module.exports = {
  entry: {
    easytimer: './node_modules/easytimer.js/dist/easytimer.js',
    script: './dist/js/script.js', 
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = {
  entry: {
    script: './dist/js/script.js',
    alarm: './dist/js/alarm.js', 
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};