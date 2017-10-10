const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'build'), //build?
    filename: 'bundle.js', //is this what i want? i think so
    // publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
        // query: {
        //   presets: ['es2015', 'react'],
        // },
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
