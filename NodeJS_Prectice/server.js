var express = require('express');    //because its a function
var app = express();

app.set('view engine', 'ejs' ); // default engine specify


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

app.get('/profile/:name',function(req,res){
  var data = {age: 21, clg: 'DAIICT',hobbies: ['cricket','gaming','tennis']};
  res.render('profile',{person: req.params.name,data: data});                              // send data in parameter
});

app.listen(3000);
