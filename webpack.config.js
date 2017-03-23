import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const BUILD_PATH = path.join(__dirname, 'build');
const ENTRY_PATH = path.join(__dirname, 'app', 'index.js');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    // sets up an ES6-ish environment with promise support
    'babel-polyfill',
    // webpack-hot-middleware needs this
    'webpack-hot-middleware/client',
    // the main application script
    ENTRY_PATH,
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: '/', // where the generated static files reside.
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
  ],
};
