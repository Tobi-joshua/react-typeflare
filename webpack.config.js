const path = require('path');

module.exports = {
  entry: './example/App.jsx',
  output: {
    path: path.resolve(__dirname, 'example'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
       {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'example'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
};
