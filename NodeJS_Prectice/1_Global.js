// https://nodejs.org/api/globals.html


/*
console.log('hello\nJeet,');
var str = 'How are You';
console.log(str+' ?'+"?");  // Both Work good
*/

/*
//cut string from begining
var newStr = str.slice(8);   //How are You -> cut first 8 so print You
console.log(newStr+" are right");
//          OR
console.log(`${newStr} are right`);
*/

/*
console.log(__dirname);
console.log(__filename);
*/

var path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
