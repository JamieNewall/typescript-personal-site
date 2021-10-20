const webpack = require("webpack")
const path = require('path');


module.exports = {
  entry: [`./src/index.tsx`],
  mode:"production",  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx','.tsx', '.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve( './build'),
    publicPath: "/"
  },

};  