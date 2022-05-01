// 12000005 - Jelvin Joseph - D1903 - SET B

var http = require('http'); //importing http module

//creating a Node.js web server on port 8082
http.createServer(function (req, res) {
    //line 7 to 8 is used to write lines to the user who visits our web server
    res.write('Hello Everyone, My name is Jelvin Joseph') //my name ofcourse
    res.write('This is just a simple web server that I created for my CA');
    res.end(); //response end
}).listen(8082); //specifying the local listening port