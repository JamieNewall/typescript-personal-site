const webpack = require("webpack")
const path = require('path');


module.exports = {
  entry: ['webpack-hot-middleware/client', `./src/index.tsx`],
  mode:"development",
  devServer: {
    contentBase: "public",
    hot: true, 
    stats: {colours: true}
  },
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
    path: path.resolve(__dirname, 'public'),
    publicPath: "/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};  