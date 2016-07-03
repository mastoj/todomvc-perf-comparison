var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./temp/react-todomvc",
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
  }
};
