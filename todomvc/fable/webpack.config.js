var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./temp/virtualdom",
  output: {
    path: path.join(__dirname, "out"),
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
    ],
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
        "process.env": { 
            NODE_ENV: JSON.stringify("production") 
        }
    })
  ]
};
