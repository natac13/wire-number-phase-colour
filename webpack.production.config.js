const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const BUILD_PATH = path.join(__dirname, 'build');
const ENTRY_PATH = path.join(__dirname, 'app', 'index.js');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: [
    // sets up an ES6-ish environment with promise support
    // 'babel-polyfill', do not need here as in the webpack.server.js file
    // the main application script
    ENTRY_PATH,
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.node', '.png', '.css', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name]_[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: `@import "${path.resolve(__dirname, 'app/stylesheets/theme.scss')}";`,
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunk: true }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};
