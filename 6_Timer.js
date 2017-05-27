/*console.log('hello jeet,\nWait for 3 second For setTimeout');
setTimeout(function(){
  console.log('3 second passed');
},3000);
*/

/*
console.log('hello jeet,\nLets check setInterval');
//setInterval is just like a infinite loop.
var cnt=0;
setInterval(function(){
  cnt+=2;
  console.log(cnt+' second passed');
},2000);
*/

/*
console.log('hello jeet,\nLets check clearInterval');
//setInterval is just like a infinite loop.
var cnt=0;
var timer = setInterval(function(){
  cnt+=2;
  if(cnt >= 10){
    clearInterval(timer);
  }
  console.log(cnt+' second passed');
},2000);
*/

/*
var waitTime = 5000;
var currentTime = 0;
var intervalTime = 1000;
var time = setInterval(function () {
  currentTime+=intervalTime;
  console.log(currentTime/1000+ " Second passed");
  if(currentTime >= waitTime)
    clearInterval(time);
}, intervalTime);
*/

var waitTime = 5000;
var currentTime = 0;
var intervalTime = 100;
var per = 0;
process.stdout.write("\n");
var printper = function(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Waiting...  "+p+"%");
}
var time = setInterval(function () {
  currentTime+=intervalTime;
  //console.log(currentTime/1000+ " Second passed");
  per = Math.floor((currentTime/waitTime)*100);
  printper(per);
  if(currentTime >= waitTime){
    process.stdout.write("\nDone\n");
    clearInterval(time);
  }
}, intervalTime);
