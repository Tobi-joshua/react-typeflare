const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
   mode: 'production',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      type: "umd",
    },
    globalObject: "this",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};