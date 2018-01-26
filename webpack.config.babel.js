import { join } from "path";

const include = join(__dirname, "src");

export default {
  entry: "./src/wiki.js",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "wikipediajs"
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", include },
      { test: /\.json$/, loader: "json-loader", include }
    ]
  }
};
