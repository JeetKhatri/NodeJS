var fs = require('fs');


// Synchronous
/*
var readMe = fs.readFileSync('readMe.txt','utf8');  // binary so utf8(format)
console.log(data);
fs.writeFile('writeME.txt',data);
console.log("Check For Sync/Asysn");
*/


// Asynchronous
fs.readFile('readMe.txt','utf8',function(err,data){
    console.log(data);
    fs.writeFile('writeME.txt',data);
});  // binary so utf8(format)
console.log("Check For Sync/Asysn");

/*
// Remove file
fs.unlink('writeMe.txt');
*/
