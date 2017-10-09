// const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js',
    // 'webpack-dev-server/client?http://192.168.1:80', // boh
    // 'webpack/hot/only-dev-server',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'],
          plugins: ["transform-decorators-legacy", "transform-decorators"]
          }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './', //da dove prende i file
    hot: true,
    // host: 'localhost',
    host: '192.168.1.35',
    port: 8090,
    stats: 'errors-only', // mostra solo gli errori nel terminal
    // open: true, //la prima volta che compilo apre una nuova scheda
    compress: true,
    public: '192.168.1.35:8090',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement'
    // }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
