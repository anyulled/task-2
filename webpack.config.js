const webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: __dirname + "/dist/static",
    filename: "bundle.js",
    publicPath: "static/"
  },

  devServer: {
    contentBase: "./dist"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /(node_modules)/
    }]
  }
}