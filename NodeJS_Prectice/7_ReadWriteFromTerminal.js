// read -> process.stdin.on
// write -> process.stdout.write
/*
process.stdout.write("Whats your name : ");
process.stdin.on('data',function(data){
  console.log(data.toString().trim());
  process.exit();
});
//At the time of exit if we want to display any msg for that we use this method
process.on('exit',function(){
  process.stdout.write("exit");
});
*/

var questions = [
  "Whats your name  :  ",
  "Whats you Hobby  :  ",
  "In what language you are week  :  "
];
var answers=[];

function ask(i){
    process.stdout.write(`${questions[i]}`);
}

process.stdin.on('data',function(data){
    answers.push(data.toString().trim());
    if(answers.length != questions.length){
      ask(answers.length);
    }else {
      process.exit();
    }
});

process.on('exit',function(){
  process.stdout.write(`\nHey ${answers[0]},\nPlease stop ${answers[1]} and do ${answers[2]}\n`);
});
process.stdout.write("\n");
ask(0);
