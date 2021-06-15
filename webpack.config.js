//const TerserPlugin = require('terser-webpack-plugin');
// const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  mode: 'development',//DEV
  //mode: 'production',//PROD
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin(),
  //   ],
  // },
  // plugins: [
  //   new MinifyPlugin(),
  // ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env'],
          plugins: ['babel-plugin-root-import'],
        },
      },
    ],
  },

};

