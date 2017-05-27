//   https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
//   https://www.sitepoint.com/function-expressions-vs-declarations/


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

var adder = new Function('a', 'b', 'return a + b');
console.log(adder(2, 6));
