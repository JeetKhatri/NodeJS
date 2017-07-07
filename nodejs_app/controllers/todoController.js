var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data=[{name: 'Jeet Khatri'}, {name: 'Arpan Shah'}, {name: 'Sharvil Shah'}];

module.exports = function(app){

  app.get("/todo",function(req,res){
      res.render('todo',{names: data});
  });

  app.post("/todo",urlencodedParser,function(req,res){
      data.push(req.body);
      res.json(data);
  });

  app.delete("/todo/:name",function(req,res){
      data = data.filter(function(todo){                                  // filter for finding the item which we want to delete it
          return todo.name.replace(/ /g,'-') !== req.params.name;        //when both are same return false so item deleted
      });
      res.json(data);
  });

};
