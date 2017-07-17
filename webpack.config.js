const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "inline-sourcemap",
  entry: {
    options: "./src/js/options.js",
    bundle: "./src/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/css"
      },
      {
        from: "src/templates"
      },
      {
        from: "src/vendor",
        to: "vendor"
      }
    ])
  ]
};
