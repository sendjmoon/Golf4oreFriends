'use strict';

const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

// const API_URL = ''

let plugins = [
  new ExtractText('bundle.css')
  // new webpack.DefinePlugin({__API_URL__: API_URL})
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  plugins: plugins,
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  postcss: function() {
    return [autoprefixer];
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  modules: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!')
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
