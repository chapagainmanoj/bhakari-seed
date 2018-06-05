const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');
const config = require('./webpack.base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


config.entry = {
  main: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, '../static/js/src/main/index')
  ]
};

config.devtool = 'inline-sourcemap';
config.output = {
  path: path.join(__dirname, '../static/builds-development/'),
  filename: '[name]-[hash].js',
  publicPath: 'http://0.0.0.0:3000/static/builds-development/',
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('[name].css'),
  new BundleTracker({ filename: './webpack/webpack-stats.dev.json' }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      BASE_URL: JSON.stringify('http://0.0.0.0:8080/'),
    }
  })
];

config.module.loaders[0].query.plugins = ['react-hot-loader/babel'];

config.devServer = {
  inline: true,
  progress: true,
  hot: true,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  },
  host: '0.0.0.0',
  port: 3000
};

module.exports = config;
