const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // ensures the dist folder is cleared before each build
    assetModuleFilename: 'assets/[name][hash][ext][query]',
  },
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    open: true, // automatically opens the browser
    watchFiles: ["./src/index.html", "./src/index.js", "./src/styles.css"], // watches these files for changes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // uses a template file for HTML
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
