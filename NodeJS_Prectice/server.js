var express = require('express');    //because its a function
var app = express();

app.set('view engine', 'ejs' ); // default engine specify

app.use('/css',express.static('css'));   //static builtin middleware

// when user call http://127.0.0.1:3000 then the function execute.
/*app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});*/
app.get('/',function(req,res){
  res.render('index');              // render method bydefault go to check in views folder
});

app.get('/contact',function(req,res){
  res.render('contact');
});

app.get('/json',function(req,res){
  var students = [{name: 'jeet',age: 21}, {name: 'harsh',age: 22}];
  res.send(JSON.stringify(students));
});
/*
app.get('/profile/:name',function(req,res){
  var data = {age: 21, clg: 'DAIICT',hobbies: ['cricket','gaming','tennis']};
  res.render('profile',{person: req.params.name,data: data});                              // send data in parameter
});*/
  // Query String
app.get('/profile',function(req,res){                                           //http://127.0.0.1:3000/profile?name=jeet&age=21
  var data = {clg: 'DAIICT',hobbies: ['cricket','gaming','tennis']};
  res.render('profile',{qs: req.query,data: data});                             // use query to url data convert into string
});
app.listen(3000);
