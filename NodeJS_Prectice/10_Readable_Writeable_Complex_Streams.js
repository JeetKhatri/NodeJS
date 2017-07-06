var fs = require('fs');
/*
// Readable Stream
var myReadStream = fs.createReadStream('readMeStream.txt','utf8');
var cnt=0;

myReadStream.on('data',function(chunk){
  console.log("new chunk received");
  console.log(chunk);
  cnt=cnt+1;
});
myReadStream.on('error',function(err) {
  console.log(err.stack);
});
myReadStream.on('end',function(){
  console.log("Number of chunks : "+cnt);
});
*/

/*
// Writeable Stream
var myReadStream = fs.createReadStream('readMeStream.txt','utf8');
var myWriteStream = fs.createWriteStream('writeMeStream.txt');

myReadStream.on('data',function(chunk){
    console.log("new chunk received");
    myWriteStream.write(chunk);
});
*/


// Using Pipe
var myReadStream = fs.createReadStream('readMeStream.txt','utf8');
var myWriteStream = fs.createWriteStream('writeMeStream.txt');

myReadStream.pipe(myWriteStream);
