import path from "node:path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { TWebpackOptions } from "./types";

export function webpackDevServer(
  options: TWebpackOptions,
): DevServerConfiguration {
  const { port } = options;

  return {
    historyApiFallback: true,
    port,
    open: true,
    hot: true,
    compress: true,
    liveReload: false,
    client: {
      progress: true,
    },
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    proxy: [
      {
        context: "/movies",
        target: "https://api.kinopoisk.dev",
        pathRewrite: { "^/movies": "" },
        secure: false,
        changeOrigin: true,
      },
      {
        context: "/api",
        target: "https://web-production-07b8.up.railway.app",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true,
      },
    ],
  };
}
