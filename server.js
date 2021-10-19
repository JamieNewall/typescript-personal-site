"use strict";
exports.__esModule = true;
var express = require("express");
var webpack_1 = require("webpack");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require("./webpack.config");
var webpackCompiler = (0, webpack_1.webpack)(webpackConfig);
var app = express();
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));
app.use(express.static(__dirname + "/public"));
console.log('hi');
var PORT = process.env.port || 4000;
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(PORT, function () {
    console.log("Listeneing on port " + PORT);
});
