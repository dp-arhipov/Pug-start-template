// const TerserPlugin = require('terser-webpack-plugin');
// const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
 // mode: 'development',//--раскомментировать для DEV сборки
  mode: 'production',//--раскомментировать для PROD сборки

  optimization: { //--раскомментировать для PROD сборки
    minimize: true,
  },

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

