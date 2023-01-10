// Global Variables
global.rootdir = __dirname;
global.config = require('config');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello World!")
})

app.listen(config.app.port, function (req, res) {
    console.log("Travel - Lit Listening On Port: ", config.app.port)
})