var fs = require('fs');

/*
// Synchronous
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');
*/

/*
// Asynchronous
fs.mkdir('stuff',function(){});
fs.rmdir('stuff');
*/

/*
//create dir with file
fs.mkdir('stuff',function(){
  fs.readFile('readMe.txt','utf8',function(err,data){
    console.log(data);
    fs.writeFile('stuff/write.txt',data);
  });
});
console.log("check for Asynchronous");
*/
/*
//first remove file then delete dir
fs.unlink('./stuff/write.txt',function(){
    fs.rmdir('stuff');
});
*/
