// console.log("hello");

// Type of loops
// 1. while
// 2. do while
// 3. for loop
// 4. nested loop

// 1.initialization , 1
// 2.condition <=5
// 3.statment (work)
// 4.increment / decrement

// var i = 1;
// var i = 1;
// var n = parseInt(prompt("enter number"));
// while (i <= 10) {
//   // console.log(" while hello");
//   console.log(n + " X " + i + " = " + n * i);
//   i++;
// }

// console.log("i after while loop", i);

/*
2x1=2
2x2=4
2x3=6
2x4=8
2x5=10
2x6=12
2x7=14
2x8=16
2x9=18
2x10=20
*/

// do while loop

// 1.initialization , 1
// 2.statment (work)
// 3.increment / decrement
// 4.condition <=5
var i = 0;
do {
  console.log("hello do whiule");
  // i++;
} while (i > 0);

// 1.initialization , 1
// 2.condition <=5
// 3.statment (work)
// 4.increment / decrement

// for(initiaztion;condition;incree/dec){
//   stement/
// }

// var i = 0;
// var x="ali"
// while (x!="Ahmad") {
//   i++
//   if(i==10){
//     x="Ahmad"
//   }
//   console.log("hello", i);
// }

// for (var i = 0; i < 10; i++) {
//   console.log("hello");
// }

// main diff b/w for loop
// 1. number of iterations is not known in while loop
// 2 number of iterations is known in for loop
// let counter = 0;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log("i" + i, "j" + j);
//     counter++;
//   }
// }
// console.log("counter", counter);
// 1 1
// 1 2
// 2 1
// 2 2

// loop controls
// 1. breaks
// 2. continue

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log("hello break", i);
// }

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log("hello continue", i);
// }
// console.log("ended");

// for (var i = 0; i < 10; i++) {
//   var userName = prompt("Enter your name");
//   var option = prompt("Do you want to continue Y/N");
//   if (option === "N" || option === "n") {
//     break;
//   }
//   console.log("Your name is", userName);
//   console.log("Your option was", option);
// }


var i = 0;
do {
  var userName = prompt("Enter your name");
  var option = prompt("Do you want to continue Y/N");
  console.log("Your name is", userName);
  console.log("Your option was", option);
  i++;
} while ((option != "N" || option != "n") && i < 10);
