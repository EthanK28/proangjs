//var connect = require('connect');
var serveStatic = require('serve-static');
var express = require('express');

var serve = serveStatic('angularjs', {'index': false });
//var serve = serveStatic(__dirname);
var app = express();
app.use(serve);

console.log("Server running at localhost:3000...");
app.listen(3000);