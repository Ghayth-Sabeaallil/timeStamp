const path = require("path");

module.exports = {
  entry: {
    easytimer: "./node_modules/easytimer.js/dist/easytimer.js",
    script: "./dist/js/script.js",
    setTimer: "./dist/js/setTimer.js", // Anpassa sökvägen om nödvändigt
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
