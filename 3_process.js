/*
console.log(process.argv);
*/


// E:\Study\GitHub\NodeJS_Prectice>node 2_process --user jeet --msg "good day sir"

function fun(flag) {
    var index = process.argv.indexOf(flag);
    return (index == -1) ? null : process.argv[index+1];
}
var msg = fun('--msg');
var user = fun('--user');

if(msg==null || user==null){
    console.log('please enter --user and --msg');
}else{
    console.log("welcome "+user+",\n"+msg);
}
