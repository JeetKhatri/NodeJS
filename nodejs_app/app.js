var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// template engine for display
app.set('view engine','ejs');

// static files like style.css
app.use(express.static('./public'));

// fire controoler
todoController(app);

//listen to port
app.listen(3000);
