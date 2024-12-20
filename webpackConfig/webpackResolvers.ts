import webpack from "webpack";
import { TWebpackOptions } from "./types";

export function webpackResolvers(options: TWebpackOptions): webpack.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    preferAbsolute: true,
    modules: [
      options.path.src,
      "node_modules"
    ],
    mainFiles: ["index"],
  };
}
