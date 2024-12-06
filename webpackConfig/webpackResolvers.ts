import webpack from "webpack";

export function webpackResolvers(): webpack.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    preferAbsolute: true,
    // modules: [
    //   options.path.src,
    //   'node_modules'
    // ],
    // mainFiles: ['index'],
  }
}