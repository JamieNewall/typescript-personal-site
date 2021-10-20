const express = require("express")
import * as path from 'path'
const webpack = require("webpack")
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = {
  
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
      path: path.resolve( 'public'),
      publicPath: "/"
    },
    devtool: "inline-source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()]
  
}

const webpackCompiler = webpack(webpackConfig)
const app = express()

app.use(webpackDevMiddleware(webpackCompiler))
app.use(webpackHotMiddleware(webpackCompiler))
app.use(express.static(`${__dirname}/public`))

console.log('Server Running...')


const PORT = process.env.port || 4000

// @ts-ignore
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(PORT, () => {
  console.log(`Listeneing on port ${PORT}`)
})