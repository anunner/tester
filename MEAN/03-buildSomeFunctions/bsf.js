function runningLogger(){
  console.log('i am running')
}
runningLogger();

function multiplyByTen(num){
  console.log(num*10);
  return(num*10);
}
multiplyByTen(5);

function stringReturnOne(){
  console.log("first string");
  return("first string");
}
stringReturnOne();

function stringReturnTwo(){
  console.log("second string");
  return("second string");
}
stringReturnTwo();

function caller(arg) {
  console.log(typeof(arg));
  if(typeof(arg)=='function'){
  console.log (arg(12));
  }
}
caller(multiplyByTen)


function myDoubleConsoleLog(p1, p2){
  if(typeof(p1)=="function" && typeof(p2)=="function"){
    console.log(p1(), p2());
  }
}
myDoubleConsoleLog(stringReturnTwo, stringReturnOne);


function caller2(p1){
  console.log('Starting.....');
  console.log(typeof(p1));
  if(typeof(p1)=="function"){
  setTimeout(p1,10000);
  }
  console.log('ending?.....');
  return 'interestng....';
}
caller2(multiplyByTen)   ;
