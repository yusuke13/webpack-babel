import webpack from 'webpack';
import path from 'path';
import ExtracTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry : {
    "sideMenu-controller" : './src/js/sideMenu-controller.js'
  },
  output : {
    path : path.resolve(__dirname, './release/js'),
    filename : '[name].js'
  },
  module : {
    rules : [
      {
        test : /\.js[x]?$/,
        use : {
          loader : 'babel-loader',
          options : {
            presets : ['env']
          }
        },
        exclude : /node_modules/,
      }
    ]
  }
};
