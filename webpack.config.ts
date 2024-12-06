import { WebpackConfiguration } from "webpack-cli";
import path from "node:path";
import {TWebpackOptions} from "./webpackConfig/types";
import {webpackResolvers} from "./webpackConfig/webpackResolvers";
import {webpackPlugins} from "./webpackConfig/webpackPlugins";
import {webpackLoaders} from "./webpackConfig/webpackLoaders";
import {webpackDevServer} from "./webpackConfig/webpackDevServer";

export default (env: any): WebpackConfiguration => {
    const port = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === "development";

    const options: TWebpackOptions = {
        path: {
            html: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src"),
            entry: path.resolve(__dirname, "src", "index.tsx"),
            build: path.resolve(__dirname, "build"),
        },
        isDev,
        mode,
        port
    };

    return {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        mode,
        target: ["web", "es5"],
        devtool: "inline-source-map",
        plugins: webpackPlugins(options),
        module: {
            rules: webpackLoaders(options)
        },
        resolve: webpackResolvers(),
        devServer: webpackDevServer(options),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.[contenthash:8].js",
            chunkFilename: "chunk.[contenthash:8].js",
            clean: true,
            publicPath: "/"
        }
    };
};