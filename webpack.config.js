const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
  mode: 'development',
  entry: './static/js/src/main/index',
  output:{
    filename: '[name]-[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use:[
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'public/index.html',
  //     favicon: 'public/favicon.ico'
  //   })
  // ],
  devServer: {
    host: 'localhost',
    port,
    contentBase: '/',
    historyApiFallback: true,
    open: true,
    hot: true,
    progress: true,
    inline: true
  }
};
