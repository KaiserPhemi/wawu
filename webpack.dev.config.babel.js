import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './template/index.html',
  filename: 'index.html',
  inject: 'body'
});

export default {
  devtool: 'eval-source-map',
  watch: true,
  externals: {},
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true', // Handles reload if HMR fails
    path.join(__dirname, '/client/Index.jsx')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client'
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
      {
        test: /.jsx?$/,
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }

};
