/* global require __dirname module */
let path = require('path');

let conf = {
  //entry: './es6/lesson7-hw-done/index.js',
  entry: './es6/lesson8/index.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.js',
    publicPath: 'js/',
  },
  devServer: {
    overlay: true,
    proxy: {
      '/js-hw-api/**': {
        target: 'http://faceprog.ru/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: '/node_modules/'
      },
    ],
  },
};

module.exports = (env, options) => {
  conf.devtool =
    options.mode === 'production' ? false : 'cheap-module-eval-source-map';

  return conf;
};
