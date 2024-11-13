// Data Strucuture

// array.

// store data in strucutred for

// var student1 = "Ali";
// var student2 = "Ahmad";
// var student3 = "Ambar chutti vali baji";
// var student4 = "Aqsa";
// var student5 = "saba ";

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);
// console.log(student5);

// index number
// length , number of elements in the array
// var studentArray = ["ali", "ahmad", "ambar", "aqsa", "saba"];
// var studentArray = [];
// studentArray[0] = "Ali";
// studentArray[1] = "Ahmad";
// studentArray[2] = "Ambar chutti vali baji";
// studentArray[3] = "Aqsa";
// studentArray[4] = "saba ";

// console.log("student", studentArray);
// console.log("array", studentArray[0]);

// var fruitArray = [];

// for (var i = 0; i < 5; i++) {
//   fruitArray[i] = prompt("Enter fruit name");
//   //   fruitArray[0] = "Mango"
//   //   fruitArray[1] = "orange"
//   //   fruitArray[2] = "banan"
//   //   fruitArray[3] = "stwarebary"
//   //   fruitArray[4] = "peach"
// }

// for (var i = 0; i < fruitArray.length; i++) {
//   console.log("Array", fruitArray[i]);
//   //   console.log("Array", fruitArray[0]);
//   //   console.log("Array", fruitArray[1]);
//   //   console.log("Array", fruitArray[2]);
//   //   console.log("Array", fruitArray[3]);
//   //   console.log("Array", fruitArray[4]);
// }
// // console.log("fruit array", fruitArray.length);

// var fruits = ["mango", "banana", "apple"];
// console.log("fuirt", fruits.length - 1);
// console.log("last element", fruits[fruits.length - 1]); // fruits[2]
// fruits[fruits.length - 1] = "hello";

// ********* Methods of arrays *******************
// console.log("real", fruits);

// 1. Adding or removing last element
// POP()
// fruits.pop();
// console.log("pop", fruits);

// PUSH()

// var fruits = ["mango", "banana", "apple"];
// fruits.push("strawberry");
// fruits.push("grapes");
// fruits.push("watermelon");
// fruits.pop();
// fruits.push("peach");
// console.log("fruits", fruits);

// 2. Adding or removing first element
// // SHIFT() remove first element

// var animals = ["cat", "dog", "rat"];
// animals.shift();
// console.log("animals", animals);

// var fruits = ["mango", "banana", "apple"];
// // UNSHIFT() add first  element

// var animals = ["cat", "dog", "rat"];
// animals.unshift("cow", "donkey", "horse", "goat");
// animals.unshift("donkey");
// animals.unshift("horse");
// animals.unshift("goat");
// console.log("animals", animals);

// var cityNames = ["fsd"];
// cityNames.push("lhr", "isb");
// cityNames.shift();
// cityNames.unshift("psh", "quto");
// cityNames.pop();
// cityNames.push("krch");
// console.log("cityame", cityNames);
// console.log("cityame lenggth", cityNames.length);

// add or remove element anywhere

// for removing
// SPLICE()
// var cityNames = ["fsd", "lhr", "isb", "psh", "quto"];
// cityNames.splice(4, 2);
// // cityName.splice(index,number of element)
// console.log("objects", cityNames);
// alert("hello")
// for addming
// var cityNames = ["fsd", "lhr", "isb", "psh", "quto"];
// cityNames.splice(1, 1, "slk");
// // cityName.splice(index,number of element)
// // console.log("objecwts", cityNames);
// alert(cityNames);
// alert(cityNames.length);

// var cleanCityNames = ["lahore", "islamabad", "peshawar", "quota", "faisalabad"];

// var userCityName = prompt("Enter your city name"); //Faisalabad
// // var cityNameFound = "no";
// var cityNameFound = false;
// for (let i = 0; i < cleanCityNames.length; i++) {
//   if (cleanCityNames[i] == userCityName.toLowerCase()) {
//     // cityNameFound = "yes";
//     cityNameFound = true;
//     alert("your city is clean");
//     break;
//   }
// }
// // if (cityNameFound == "no") {
// if (cityNameFound == false) {
//   alert("your city is not clean");
// }

// Chaning Case , method for string
// ali , lower , ALI , uppercase
// "ali"=="Ali" -->wrong
// var cityName = "faisalabad";
// var userCityName = "faisalabad";
// console.log("loer case", userCityName.toUpperCase());
// console.log("comarpsi", cityName == userCityName.toLowerCase());

var cityToCheck = "iSLAMABAD"; // Faisalabad
// console.log("🚀 ~ cityToCheck:", cityToCheck)

var firstChar = cityToCheck.slice(0, 1);
// console.log("🚀 ~ firstChar:", firstChar)

firstChar = firstChar.toUpperCase();
// console.log("🚀 ~ firstChar: firstChar.toUpperCase();", firstChar)

var secondChar = cityToCheck.slice(1, cityToCheck.length);
// console.log("🚀 ~ secondChar:", secondChar)
secondChar = secondChar.toLowerCase();
// console.log("🚀 ~ secondChar: secondChar.toUpperCase();", secondChar)

var finalCityToCheck = firstChar + secondChar;
// console.log("🚀 ~ finalCityToCheck: ", finalCityToCheck)
