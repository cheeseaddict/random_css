var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: 'jquery',
  //     jQuery: 'jquery'
  //   })
  // ]
}
