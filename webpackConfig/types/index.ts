import path from "node:path";

export type TWebpackMode = "development" | "production";

export type TWebpackPaths = {
  html: string;
  src: string;
  entry: string;
  build: string;
};

export type TWebpackOptions = {
  path: TWebpackPaths;
  isDev: boolean;
  mode: TWebpackMode;
  port: number;
};