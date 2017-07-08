var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to DB            https://mlab.com/databases/testdatabasejeetkhatri
mongoose.connect('mongodb://root:root@ds151662.mlab.com:51662/testdatabasejeetkhatri');

             // Schema
/*var todoSchema = new mongoose.Schema({
  name : String
});*/
                //or
var todoSchema = new mongoose.Schema({
  name : {
    type:String,
    require:true
  }
});


//insert
var Name = mongoose.model('Name',todoSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var data=[{name: 'Jeet Khatri'}, {name: 'Arpan Shah'}, {name: 'Sharvil Shah'}];

module.exports = function(app){

  app.get("/todo",function(req,res){
      // get request so load data from DB
      Name.find({}, function(err,data){
          if(err) throw err;
          res.render('todo',{names: data});
      });
      //res.render('todo',{names: data});
  });

  app.post("/todo",urlencodedParser,function(req,res){
      // post so add new name
      var newName = Name(req.body).save(function(err,data){
          if(err) throw err;
          res.json(data);
      });
      /*data.push(req.body);
     res.json(data);*/
  });

  app.delete("/todo/:name",function(req,res){
                              //if we want to delete name Jeet Khatri then in params it is like Jeet-Khatri so need to replace
      Name.find({name: req.params.name.replace(/\-/g," ")}).remove(function(err,data){
        if(err) throw err;
        res.json(data);
      });

      /*
      data = data.filter(function(todo){                                  // filter for finding the item which we want to delete it
          return todo.name.replace(/ /g,'-') !== req.params.name;        //when both are same return false so item deleted
      });
      res.json(data);
      */
  });

};
