console.log('line 1', first_variable);  //first variable is undefined
var first_variable = "Yipee I was first!";// first_variable is dedclared and assigned
function firstFunc() {
  first_variable = "Not anymore!!!";  //first_variable dedclared in the functin
  console.log('line 5', first_variable);
}

console.log('line 7', first_variable);
firstFunc();
console.log('line 9', first_variable);


var food = "Chicken";  //food is declared and assigned globally
function eat() {
  food = "half-chicken"; //food is assigned in the function
  console.log(food);  //should cl "half-chicken"
  var food = "gone";       // CAREFUL!  food is reassigned to "gone"
  console.log(food); // should cl "gone"  when function is called
}
eat();  //shuold cl half-chicken and gone
console.log(food);  //should cl 'Chicken'


var new_word = "NEW!"; //variable declared and assigned globally
function lastFunc() {
  new_word = "old"; //variable declared and assigned in the function
  console.log(new_word);
}

console.log(new_word);  //should cl "NEW"
lastFunc();
