
var http = require("http");

console.log("Hello world");

var a = 10;
var b = 20;
sum = a + b;

console.log("output of sum is : " + sum);

http.createServer(function (req, res) {
    res.writeHead(200, {"contentType" : "text/html"});
    res.write("welcome back Puppy");
    res.end();
}).listen(8080);

/*
Client = browser,
server = web server
how to run this file by node : node filename

web server: google server : every server is having its IP address, domain name
when we say google.com, it sends rqst to particular IP address. each server will ba having multiple services.

http, smtp, ftp : each service is having thier own port number. service runs on port.
localhost:8080//
127.0.0.1:8080/


http://127.0.0.1:8080/


http is module and createServer is function.
res.end(), // for retun 
listen// listen this request at given port





*/