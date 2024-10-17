// console.log("hello world outer");
// document.write("<h1>hello how are you?</h1>")

// console.log("hello");

/* console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello") */

// console.log("hello");

// x=1;
// y=3;
// x+y

// // numbers
// x = 123;
// x = 1.2;
// x = -1;

// // stirng
// x = "hello how are you";

// // boolean
// x = true;
// x = false;

// reserved words, keywords: var, let, const,if,for,......

// //  variable declaration
// var age;

// // variaable initialization
// age = 12;

// var age=12;

// var money;
// var age;

// var age, money;
// money = 56000;
// age = 16;

var username = "Abdul Hanan";
// console.log("my name is", username);
var present = true;
// console.log("I'm present", present);
var age = 16;
// console.log("my age is", age);

// console.log(
//   "my name is",
//   username,
//   "my age is",
//   age,
//   "and I'm Present",
//   present
// );

// Variable naming rules

// 1 .Varialbe name contains (A-Z),(a-z),(0-9),_;
// var AGE; var age, var Age,var number1, var user_name;var userName (correct)
//  var age#,var number* , var height% (in correct)

// var n1;

// 2. Variable name must start with (A-Z),(a-z),_
//  var age; var Age; var _age; (correct)
// var 1age,var 3age, (in correct)
// var #age;(in correct)

// 3. varialbe name can't be a keyword
// var if; vasr for, var var (in correct)
//  var Name;var name; (case sensitive)

// var name1 = "abdul hanan";
// name1 = "ali";
// console.log("name", name1, "name", name1);

// name1 = "ahmad";
// console.log("name", name1, "name", name1);

// Problem
// Write a js program, store your name,fathername,date of bith,age,height,class,are you hafiz? and show this in paragraph

// isHafiz=true
// areYouHafiz=true

// // In Math
// var b = 14; // b=14
// var a = 12; // b=14,a=12
// b = a; //b=12,a=12

// console.log("a is", a, "b is", b);

// var sub1 = 12;
// var sub2 = 14;
// // var resu = sub1 + sub2 + 123 + 342 + 34;
// console.log("sum", sum);
// var n1 = 23;
// var n2 = 190;
// console.log("event", n1 % n2);
// document.write("<h1 style='background-color: red;'>", n1 % n2, "</h1>");

// increcemnt (++), decrement (--)
// var n1 = 34;
// n1 = n1 + 1;
// n1++; // n1=35
// n1--; //n1=34
// n1++;
// n1-2;
// console.log("n1 inc", n1);
// n1 = n1 - 10;
// console.log("n1 dec", n1);

// postfix (n1++,n1--), prefix(++n1,--n1),
// ++n1;
// n1++
// console.log("prefix ", n1);

// prefix & post increment
// var n1 = 12;
// var n2;
// n2 = ++n1; // n2= (n1=n1+1)
// n2 = n1++; // n2= (n1=n1+1)
// n2 = --n1; // n2= (n1=n1+1)
// n2 = n1--; // n2= (n1=n1+1)
// console.log("n2", n2);
// console.log("n1", n1);

// var x = 1;

// // var result = x++ + x-- - x++ - ++x;
// console.log("result", ++x - --x + x++ - x--);
// console.log("result", x);

// var x = 12;
// // x = x + 10;
// x += 10; // x=x+10

// console.log("x", x);

// 2. comparison operator
//  < , > , >= , <= , == , === , !=

// var n1 = 52;
// var n2 = 34;
// var userName = prompt("Enter your name");
// var age = prompt("Enter your age");
// console.log("my name is", userName, "my age is ", age);
// console.log("n1", n1);
// console.log(n1 > n2);

// var n1 = prompt("enter number 1");
// var n1Input = parseInt(n1);
// var n2 = prompt("enter number 2");
// var n2Input = parseInt(n2);

// var n1 = parseInt(prompt("enter number 1"));
// var n2 = parseInt(prompt("enter number 2"));
// console.log("n1>n2", n1 > n2);
// console.log("n1", typeof n1);
// console.log("n1Inpufjsdfj djsfk jsfldtr", typeof n1Input);
// console.log("n2", typeof n2);
// console.log("n2Input", typeof n2Input);

var n1 = 0;
// var n2 = 25;
// var result = n1 >= n2;
// var result = 5 <= 5;
// var result1 = 5 == "5";
// var result2 = 5 === "5";
// var result2 = 5 != 2;
// console.log("reuslt", result1);
// console.log("reuslt", result2);
// 12-40
// console.log("2",n1>12 && n1<40)
// T && T=T
// F && T= F
// T && F = F

// console.log("2", n1 > 12 || n1 < 40);
// T || F= T
// F || T=T

// var result = !(12 > 24) && (24 < 53 || 4 > 5) && 123 > 24;
//  T && (T || F )&& T
// T && T && T
// T
// console.log("reuslt", !result);
// var n1 = 13;
// var n2 = 12;
// var result = n1 % 2 == 0 ? "even" : "odd";
// T?...:
// console.log("result", result);

// write a js program to get the age from the user, if age is less then 18 show that you are under 18 otherwise show that you are adult

var age = parseInt(prompt("Enter you age"));

var result = age < 18 ? "You are under 18" : "You are adult";
console.log("result", result);




