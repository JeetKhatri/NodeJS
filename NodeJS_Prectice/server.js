var express = require('express');    //because its a function
var app = express();

// hen user call http://127.0.0.1:3000 then the function execute.
app.get('/',function(req,res){
  res.send("home page");
});

app.get('/home',function(req,res){
  res.send("home page");
});

app.get('/error',function(req,res){
  res.send("error page");
});

app.get('/json',function(req,res){
  var students = [{name: 'jeet',age: 21}, {name: 'harsh',age: 22}];
  res.send(JSON.stringify(students));
});

app.listen(3000);
