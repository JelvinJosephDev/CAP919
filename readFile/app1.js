// 12000005 - Jelvin Joseph - D1903 - SET B
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('lpu.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }); 
}).listen(8088);