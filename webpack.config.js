const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: "inline-sourcemap",
  entry: {
    options: "./src/js/options.js",
    bundle: "./src/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  }
};
