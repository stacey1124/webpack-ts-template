const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["./app.tsx"],
  // entry: ["./app.tsx"], // 入口文件
  output: {
    path: path.resolve(__dirname, "dist"), // 定义输出目录
    filename: "my-first-webpack.bundle.js", // 定义输出文件名称
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      // {
      //   test: /\.tsx$/, // 匹配.js文件
      // {
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env", "@babel/preset-react"],
      //       plugins: ["@babel/plugin-proposal-class-properties"],
      //     },
      //   },
      // },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    hot: true, // 热替换
    contentBase: path.join(__dirname, "dist"), // server文件的根目录
    compress: true, // 开启gzip
    host: "127.0.0.1",
    port: 8080, // 端口
    historyApiFallback: true,
  },
  // devServer: {
  //   host: "localhost",
  //   port: 8080,
  //   open: true,
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: path.resolve(__dirname, "dist/index.html"),
    }),
  ],
};
