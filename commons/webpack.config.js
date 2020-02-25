const path = require("path");
const webpack = require("webpack");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    commons: glob.sync("./*.js", {
      ignore: ["./webpack.config.js", "./prefixer.js"]
    })
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "./dist"),
    library: "[name]"
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DllPlugin({
      name: "[name]",
      entryOnly: true,
      path: "./dist/[name].json"
    })
  ]
};
