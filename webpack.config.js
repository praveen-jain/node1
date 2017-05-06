var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'application.bundle.js',
  }
};