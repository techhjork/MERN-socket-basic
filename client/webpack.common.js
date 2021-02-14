const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      },
      {
        loader: 'eslint-loader'
      }]
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
       {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
};

