import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { TWebpackOptions } from "./types";

export function webpackPlugins(
  options: TWebpackOptions,
): webpack.WebpackPluginInstance[] {
  const { path, isDev } = options;

  const plugins: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: path.html,
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash:8].css",
      chunkFilename: "chunk.[contenthash:8].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: path.build,
          globOptions: {
            ignore: ["**/*.html"],
          },
        },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshPlugin());
  }

  return plugins;
}
