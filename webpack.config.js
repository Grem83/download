var webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
// const dev process.env.NODE_ENV === "dev";

const extractSass = new ExtractTextPlugin({
  filename: 'style.css',
})

module.exports = {
  entry: './index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'style.min.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader', options: {
              sourceMap: true
            },
            }, {
              loader: 'sass-loader', options: {
                sourceMap: true
              },
            }],
          fallback: 'style-loader',
        }),
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          }],
      }],
  },
  plugins: [
    extractSass,
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
}