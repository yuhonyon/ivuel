var path = require("path");
var webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'vuex', 'vue-router']
  },
  output: {
    path: path.join(__dirname, './static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
