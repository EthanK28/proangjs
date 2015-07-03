var connect = require('connect'),
serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./ch05"));
console.log("Server");
app.listen(5000);
