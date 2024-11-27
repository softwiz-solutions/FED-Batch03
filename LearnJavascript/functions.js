// function functionname (){
// }

// function greeting() {
//   console.log("hello");
// }

// // funcitonName() -->functin call

// greeting();
// greeting();
// greeting();
// greeting();
// greeting();

// function currentDateTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   console.log("Time: " + theHr + ":" + theMin);
// }

// currentDateTime()
// console.log("hello")
// currentDateTime()

// function greeting(parameter) {
//   console.log(parameter);
// }
// greeting(argument)

// Argument and parameters

function greeting(userName, fatherName) {
  //paramets
  //param
  console.log("user name " + userName + " father name is " + fatherName);
}

// var fName = "Muhammad Mukhatr";

// greeting("rehman", fName);

//write a js program, get the following user details from user,
// name, father name, age , class, address, gender, phhone number, and show the output in one paragrpah using function

function sum(a, b) {
  // console.log("sum is ", a + b);
  let ans = a + b;
  return ans;
}

var operator = "+";
var n1 = 23;
var n2 = 12;

var result = 0;

if (operator == "+") {
  // sum(n1, n2);
  // console.log("sum function ", sum(n1, n2));
  // result= sum(n1, n2)//35
}

console.log("reuslt", result);

function nameGenerator(userName) {
  let name = userName + " softwiz solutions and institute";
  return name;
}



let userName = prompt("enter your name");
let generatedName = nameGenerator(userName);
console.log("🚀 ~ generatedName:", generatedName);

