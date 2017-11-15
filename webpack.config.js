const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: "inline-sourcemap",
  entry: {
    background: "./src/js/background.js",
    options: "./src/js/options.js",
    bundle: "./src/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/css', to: 'css' },
      { from: 'src/fonts', to: 'fonts' },
      { from: 'src/img', to: 'img' },
      { from: 'src/vendor', to: 'vendor' },
      { from: 'src/manifest.json' },
      { from: 'src/options.html' },
      { from: 'src/popup.html' },
    ])
  ]
};
