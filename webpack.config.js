const path = require("path");

module.exports = {
  entry: {
    destination: "./src/scripts/destination.js",
    crew: "./src/scripts/crew.js",
    home: "./src/scripts/home.js",
    technology: "./src/scripts/technology.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/scripts")
  },
  target: 'node',
  externals: {
    express: 'express',
  },
  stats: {
    errorDetails: true
  }
};