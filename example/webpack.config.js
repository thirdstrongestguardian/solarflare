var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  devServer: {
    contentBase: './public',
    hot: true
  }
};