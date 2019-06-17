const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        include: path.resolve('./main.js'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: require('./.babelrc'),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[hash]'
        }
      },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      // { test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=src/assets/[name].[ext]"},
    ]
  },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     },
//     extensions: ['*', '.js', '.vue', '.json']
// },
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.esm.js'
  }
},
// resolve: {
//   modules: ['node_modules'],
//   alias: {
//     public: path.join(__dirname, './public')
//   }
// },
  // devServer: {
  //   open: true,
  //   hot: true,
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   publicPath: '/dist/'
  // },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ], 
}
  if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
}