function sumXY(x,y){
var sum = 0
for(var num = x; num <= y; num++){
sum+=num;
console.log(sum);
}
console.log(sum);
}
sumXY(0,10);

var x = function(x,y){
var sum = 0
for(var num = x; num <= y; num++){
sum+=num;
console.log(sum);
}
console.log(sum);
}
x(0,10);




function findMin(arr){
  var min = arr[0];
  for(var idx = 0; idx <arr.length; idx++){
  if(arr[idx]<min)  {
    min = arr[idx];
    //console.log(min);
  }
  }
  console.log('this is from console.log', min);
  return min
}
test=[25, 7,56,3,8,11,58,99]
findMin(test);

var fm = function(arr){
  var min = arr[0];
  for(var idx = 0; idx <arr.length; idx++){
  if(arr[idx]<min)  {
    min = arr[idx];
    //console.log(min);
  }
  }
  console.log('this is from anonymous function fm', min);
  return min
}
test=[25, 7,56,3,8,11,58,99]
fm(test)


function findAVG(arr){
  var sum = 0;
  for(var idx = 0; idx<arr.length; idx++){
    sum+=arr[idx];
    console.log(sum);
  }
  console.log(arr.length);
  avg = sum/arr.length;
  console.log('this is the sum', sum, 'this is arr.length', arr.length, 'and this is the average', avg);
}
var test1=[2,4,6,8,10]
findAVG(test1)

var object = {avgFunc: function(arr){
  var sum = 0;
  for(var idx = 0; idx<arr.length; idx++){
    sum+=arr[idx];
    console.log(sum);
  }
  console.log(arr.length);
  avg = sum/arr.length;
  console.log('this is the sum', sum, 'this is arr.length', arr.length, 'and this is the average', avg);
}}
object.avgFunc(test1)

var object={
  name: 'alan',
  distance_traveled: 0,
  say_name: function(){
    alert(object.name);
  },

  say_something: function(p1){
    console.log(object.name, 'says', p1)
  },
  walk: function(){
    alert(object.name, 'is walking',object.distance_traveled+3, 'miles')
  }
}
//object.say_name();
object.say_something('i am cool');
object.walk();
