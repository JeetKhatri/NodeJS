//  node JS has also Inbuilt modules like event,util etc.
// like in page in JS or HTML, on element we write event like onClick


var events = require('events');
/*
//Simple
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(msg){
  console.log(msg);
});

myEmitter.emit('someEvent','someEvent function called by user');
*/

// Advance

var util = require('util');         // built-in module

var Person = function(name){       // setter
  this.name=name;
}

util.inherits(Person,events.EventEmitter);

var person1 = new Person('person1');
var person2 = new Person('person2');
var person3 = new Person('person3');

var people = [person1,person2,person3];     //array of persons

people.forEach(function(p){
    p.on('speak',function(msg){                          // here 'on' is inherited
      console.log(p.name+" said  : "+msg);
    });
});

person1.emit('speak','go to hell');
