const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: __dirname + '/app/assets/js/app.jsx'
  },

  output: {
    path: path.join(__dirname, '/app/build/js'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] },
      { test: /\.js$?/, exclude: /node_modules/, loaders: ['uglify-loader'] }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  }
};
