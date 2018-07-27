'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV === 'production';

const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
  output: {
    path: config.dist.assetsRoot,
    publicPath: '/dist/',
    filename: 'vueui.min.js',
    library: 'vueui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})

module.exports = webpackConfig
