import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {TWebpackOptions} from "./types";
import webpack from "webpack";

export function webpackPlugins(options: TWebpackOptions): webpack.WebpackPluginInstance[] {
  const {
    path
  } = options;

  return [
    new HtmlWebpackPlugin({
      template: path.html,
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash:8].css",
      chunkFilename: "chunk.[contenthash:8].css",
    })
  ];
}