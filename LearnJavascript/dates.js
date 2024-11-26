var currentDate = new Date();
// console.log("🚀   ~ currentDate:", currentDate.toString());
// : Wed Nov 20 2024 19:03:01 GMT+0500 (Pakistan Standard Time)

var dayArray = ["sun", "mon", "Tue", "Wed", "Thu", "Fri", "sat"];
var monthArray = [
  "jan",
  "feb",
  "march",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
// var currenDay = currentDate.getDay();
// // console.log("🚀 ~ currenDay:", dayArray[currenDay]);
// console.log("🚀 ~ currenDay:", currenDay);
// var currentHours = currentDate.getHours();
// console.log("🚀 ~ currentHours:", currentHours);

// var currentMinutes = currentDate.getMinutes();
// console.log("🚀 ~ currentMinutes:", currentMinutes);

// var currentSeconds = currentDate.getSeconds();
// console.log("🚀 ~ currentSeconds:", currentSeconds);

// var currentMiliseconds = currentDate.getMilliseconds();
// console.log("🚀 ~ currentMilieconds:", currentMiliseconds);

// var currentYear = currentDate.getFullYear();
// console.log("🚀 ~ currentYear:", currentYear);

// var currentMonth = currentDate.getMonth();
// console.log("🚀 ~ currentMonth:",monthArray[currentMonth]);

// var currentDate = currentDate.getDate();
// console.log("🚀 ~ currentDate:", currentDate);

// var getTime = currentDate.getTime();
// console.log("🚀 ~ getTime:", getTime);
var userDob = prompt("Enter your dob", "October 18,2000");
var dob = new Date(userDob);
var dobTime = dob.getTime();
var currentDate = new Date();
var currentTime = currentDate.getTime();
console.log("currentTime", currentTime);
console.log("dobTime", dobTime);

var diff = currentTime - dobTime;

var year = Math.floor(diff / (12 * 30 * 24 * 60 * 60 * 1000));
console.log("🚀 ~ year:", year);






