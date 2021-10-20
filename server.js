"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var webpack = require("webpack");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = {
    entry: ['webpack-hot-middleware/client', "./src/index.tsx"],
    mode: "development",
    devServer: {
        contentBase: "public",
        hot: true,
        stats: { colours: true }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('public'),
        publicPath: "/"
    },
    devtool: "source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
var webpackCompiler = webpack(webpackConfig);
var app = express();
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));
app.use(express.static(__dirname + "/public"));
console.log('Server Running...');
var PORT = process.env.port || 4000;
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(PORT, function () {
    console.log("Listeneing on port " + PORT);
});
