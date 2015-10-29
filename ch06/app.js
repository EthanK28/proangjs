var connect = require('connect');
var serveStatic = require('serve-static');

var serve = serveStatic(__dirname+'angularjs', {'index': ['default.html', 'app.htm']});

var app = connect();
app.use(serve);

app.listen(3000);