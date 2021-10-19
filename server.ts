const express = require("express")
import * as path from 'path'
import { HotModuleReplacementPlugin, webpack } from 'webpack'
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require("./webpack.config")

const webpackCompiler = webpack(webpackConfig)
const app = express()

app.use(webpackDevMiddleware(webpackCompiler))
app.use(webpackHotMiddleware(webpackCompiler))
app.use(express.static(`${__dirname}/public`))

console.log('hello world!!!!')


const PORT = process.env.port || 4000

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(PORT, () => {
  console.log(`Listeneing on port ${PORT}`)
})