/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

const outputFile = 'app.js'

const config = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  // devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    // library: libraryName,
    // libraryTarget: 'var',
    // umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  devServer: {
    contentBase: __dirname
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.jsx']
  }
};

module.exports = config;