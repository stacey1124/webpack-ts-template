const path = require("path");

module.exports = {
  mode: "development",
  entry: "./server/index.js",
  output: {
    filename: "app.js",
    path: path.resolve("server/build"),
  },
  target: "node",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
