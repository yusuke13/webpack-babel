import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


module.exports = {
  entry : {
    "sideMenu-controller" : path.resolve(__dirname, 'src/js/sideMenu-controller.js'),
    "css_common" : path.resolve(__dirname, 'src/js/css_common.js')
  },
  output : {
    //path : __dirname + '/release/js/',
    path : path.resolve(__dirname, 'release/js'),
    publicPath : '/release/js/',
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
      },
      {
        test : /\.scss$/,
        use : ExtractTextPlugin.extract(
          {
            fallback : 'style-loader',
            use : [{
              loader : 'css-loader'
            },{
              loader : 'sass-loader'
            },{
              loader : 'resolve-url-loader'
            }]
          }
        )
      },
      {
        test : /\.(jpe?g|png|gif)$/i,
        use : {
          loader : 'url-loader'
        }
      }
    ]
  },
  resolve : {
    extensions : ['.js', '.jsx', '.scss'],
    modules : ['node_modules', __dirname]
  },
  plugins : [
    new ExtractTextPlugin('/release/css/[name].css')
  ]
};
