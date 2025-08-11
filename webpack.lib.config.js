const path = require('path');

module.exports = {
  entry: './src/index.js',         
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'react-typeflare',
      type: 'commonjs2',            
    },
    clean: true,
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
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react',                 
    'react-dom': 'react-dom',
  },
  devtool: 'source-map',
  mode: 'production',
};
