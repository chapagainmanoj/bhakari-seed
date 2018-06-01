const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      '../static/js/src/main/index.jsx'
    ]
  },
  output: {
    path: path.resolve('../static/builds-development/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://0.0.0.0:3000/static/builds-development/',
  },
  plugins: [
    new BundleTracker({ filename: './webpack4-stats.json' }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    inline: true,
    progress: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000
  }

};
