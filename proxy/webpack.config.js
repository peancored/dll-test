const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules']
  },
  entry: {
    library: [
      'commons'
    ]
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
      path: './dist/[name].json'
    })
  ]
};
