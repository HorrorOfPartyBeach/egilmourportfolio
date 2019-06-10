const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader'} },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
},
  devServer: {
    open: true,
    hot: true,
  },
  externals: {
    bootstrap: {
      Util: 'Util',
      Alert: 'Alert',
      Button: 'Button',
      Carousel: 'Carousel',
      Collapse: 'Collapse',
      Dropdown: 'Dropdown',
      Modal: 'Modal',
      Popover: 'Popover',
      Scrollspy: 'Scrollspy',
      Tab: 'Tab',
      Tooltip: 'Tooltip'
  },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};