module.exports = {

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-2', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=5120&name=[name]-[hash:6].[ext]!image-webpack-loader',
    },
    {
      test: /\.(woff|svg|eot|ttf|woff2)$/,
      loader: 'url-loader?limit=1024&name=[name]-[hash:6].[ext]!image-webpack-loader',
    }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};
