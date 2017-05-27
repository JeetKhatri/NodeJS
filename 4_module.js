//Consider modules to be the same as JavaScript libraries.
//A set of functions you want to include in your application.
//To include a module, use the require() function with the name of the module:

//here 4_submodule has contains all below function and variable.

// This is example of user define modules

var submodule = require('./4_submodule');

console.log(submodule.sum(4,5));
console.log(submodule.arr_cnt(['abc','def','ghi']));
console.log(submodule.sum(submodule.pi,5));
