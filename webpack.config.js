var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'public');

const common = {
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code 
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks 
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

const client = {
  entry: APP_DIR + '/client.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

const server = {
  entry: APP_DIR + '/server.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];