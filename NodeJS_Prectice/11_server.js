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

/*
var fs = require('fs');
var server = http.createServer(function(req,res){
  console.log("requested url : "+req.url);
  res.writeHead(200,{'Content-Type' : 'text/plain'});
  var myReadStream = fs.createReadStream('readMeStream.txt','utf8');
  myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log("server started");
*/

var fs = require('fs');
var server = http.createServer(function(req,res){
  console.log("requested url : "+req.url);
  if(req.url === '/home' || req.url === '/' ){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    var myReadStream = fs.createReadStream('index.html','utf8').pipe(res);
  }else if(req.url == '/json'){
    var students = [{name: 'jeet',age: 21}, {name: 'harsh',age: 22}];
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.end(JSON.stringify(students));
  }else{
    res.writeHead(404,{'Content-Type' : 'text/html'});
    var myReadStream = fs.createReadStream('error.html','utf8').pipe(res);
  }
});
server.listen(3000,'127.0.0.1');
console.log("server started");
