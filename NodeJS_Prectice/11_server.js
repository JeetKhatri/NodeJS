var http = require('http');

/*
var server = http.createServer(function(req,res){
  console.log("requested url : "+req.url);
  res.writeHead(200,{'Content-Type' : 'text/plain'});
  res.end("Front page");
});
server.listen(3000,'127.0.0.1');
console.log("server started");
*/


var fs = require('fs');
var server = http.createServer(function(req,res){
  console.log("requested url : "+req.url);
  res.writeHead(200,{'Content-Type' : 'text/plain'});
  var myReadStream = fs.createReadStream('readMeStream.txt','utf8');
  myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log("server started");
