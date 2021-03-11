const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    "index": path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: __dirname + "/com.cep.test",
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory'],
      },
      {
        test: /\.(png|jpg|gif|cur|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      filename:'index.html',
      chunks: ['index']
    }),
    new CopyPlugin({
      patterns: [{ from: 'public' }, { from: 'src/jsx', to: "jsx" }],
    })
  ]
}
