const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./node_modules/commons/dist/commons.json')
    }),
    new CopyPlugin([
      { from: 'node_modules/commons/dist/commons.dll.js', to: '' },
    ])
  ]
};
