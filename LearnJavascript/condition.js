// write a js program,to get the obt marks,total marks from the user and  the greate to the user
// var n1 = 28;
// var n1 = parseInt(prompt("enter number"));
// if (n1 % 2 == 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// if (n1 % 2 != 0) {
//   console.log("Number is Odd");
// } else {
//   console.log("Number is even");
// }

//  percentage >=90 , A
//  percentage >=80 , B
//  percentage >=60 , C
//  percentage <60, D

// var percentage=

// var percentage = parseInt(prompt("Enter your marks percentag"));

// if (percentage >= 90) {
//   console.log("A");
// } else if (percentage >= 80) {
//   console.log("B");
// } else if (percentage >= 60) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// if (percentage >= 90) {
//   console.log("A");
// }

// if (percentage >= 80) {
//   console.log("B");
// }

// if (percentage >= 60) {
//   console.log("C");
// }

// if (percentage < 60) {
//   console.log("D");
// }

// write a js program , to get the values from user, if age is greater then 50 , show you are old, if age is greater than 30 show you are young, if age is greater than 18 show you are adult,otherwise show you are child

//  percentage >=90 , A
//  percentage >=80 , B
//  percentage >=60 , C
//  percentage <60, D

// write a js program to get the obtain marks and total marks from user, calcualte percentage and show the grade according to the following criteria
//  percentage >=90 , A
//  percentage >=80 , B
//  percentage >=60 , C
//  percentage <60, D

// neseted if
// if (condition) {
//   if (condition) {
//   } else {
//   }
// } else {
// }

// var age = parseInt(prompt("Enter your age"));
// // party ticket system
// if (age >= 18) {
//   if (age >= 50) {
//     console.log("adult");
//   } else if (age >= 20) {
//     console.log("young");
//   } else {
//     console.log("you are adult");
//   }
// } else {
//   if (age >= 15) {
//     console.log("your are", 18 - age, "year younger than 18 ");
//   }
//   console.log("you are not allowed");
// }

// age>50 , old
// age>=30 , young
// age , adult

var number1 = parseInt(prompt("Enter number 1"));
var number2 = parseInt(prompt("Enter number 2"));
var opr = prompt("Enter your operator");
var result;
// if (opr == "+") {
//   result = number1 + number2;
// } else {
//   result = number1 - number2;
// }

switch (opr) {
  case "+": {
    // if (opr == "+") {
    result = number1 + number2;
    break;
  }
  case "-": {
    result = number1 - number2;
  }
  default: // else {
    console.log("please enter valid operator");
}

console.log("result", result);
