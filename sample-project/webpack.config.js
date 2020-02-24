const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./node_modules/commons/dist/library.json')
    }),
    new CopyPlugin([
      { from: 'node_modules/commons/dist/library.dll.js', to: '' },
    ])
  ]
};
