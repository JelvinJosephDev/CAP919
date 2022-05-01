// 12000005 - Jelvin Joseph - D1903 - SET B
var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Welcome to Lovely Professional University');
}).listen(8080);