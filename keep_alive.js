var http = require('http');

http.createServer(funtion (req, res) {
  res.write("im alive");
  res.end();
}).listen(8080);
