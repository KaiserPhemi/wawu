import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

export default {
  devtool: 'eval-source-map',
  watch: true,
  externals: {},
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'client/index')
  ],
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client')
  },
  stats: {
    warnings: true,
    errors: true,
    colors: true
  },
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery'
    }),
    HtmlWebpackPluginConfig
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, include: path.join(__dirname, 'client'), loaders: ['ts-loader', 'tslint-loader'] },
      { test: /\.(js|jsx)$/, include: path.join(__dirname, 'client'), exclude: /node_modules/, loader: ['react-hot-loader', 'babel-loader'] },
      { test: /\.s?css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|gif|svg|jpg|otf)$/i, loaders: [ 'file-loader', 'image-webpack-loader' ] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx', '.ts', '.tsx']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }

};
