var webpack = require("webpack")

module.exports = {
  context: __dirname,
  entry: "./frontend/foundsounds.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
    plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
    module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx' ]
  }
};