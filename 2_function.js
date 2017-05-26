//function
function simplefun(){
    console.log('simple function');
}
simplefun();
//function Expression
var expr = function() {
    console.log('function Expression');
}
expr();
//pass function
console.log('pass function');
function callFunction(fun){
    fun();
}
callFunction(expr);


//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function


// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function('a', 'b', 'return a + b');

// Call the function
console.log(adder(2, 6));
// > 8
