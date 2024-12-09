import { TWebpackOptions } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function webpackLoaders(
  options: TWebpackOptions,
): webpack.RuleSetRule[] {
  const { isDev } = options;

  const babelTsLoader = {
    test: /\.(jsx?|tsx?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
      },
      {
        loader: "ts-loader",
      },
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          import: true,
          modules: {
            namedExport: false,
          },
        },
      },
      "sass-loader",
    ],
  };

  return [babelTsLoader, scssLoader];
}
