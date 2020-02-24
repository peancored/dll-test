const path = require('path');
const webpack = require('webpack');
const glob = require("glob");

module.exports = {
  // context: process.cwd(),
  mode: 'development',
  resolve: {
    alias: {
      myalias: './'
    },
    // extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    // modules: [__dirname, 'node_modules']
  },
  entry: {
    library: glob.sync("./*.js", { ignore: "./webpack.config.js" })
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './dist'),
    library: '[name]'
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DllPlugin({
      name: '[name]',
      entryOnly: true,
      path: './dist/[name].json'
    })
  ]
};

// module.exports = {
  // entry: './src/index',
  // mode: 'development',
  // output: {
    // filename: 'index.js',
    // path: path.resolve(__dirname, 'dist'),
    // library: "commons"
  // }
// };
