// var object_name={
//     property:value
// key:value
// }

// var plan1 = {
//   name: "Basic", //key
//   price: 100,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   benetifts: ["best option", "b2", "b3"],
// };
// plan1.validity = "1 year";
// console.log("plan1", plan1.benetifts[1]);
// var student = {
//   id: "1",
//   name: "Aqsa",
//   class: "9th class",
//   subject: ["math", "english", "biology"],
//   marks: {
//     math: 19,
//     english: 14,
//     biology: 234,
//   },
// };

// console.log("student biology marks",student.marks.biology)

var student1 = {
  rollNo: 23,
  name: "Ali",
  age: 60,
  height: 5.4,
  subject: ["math", "english", "biology"],
  isPresent: false,
  working: function () {
    console.log("subject", this.subject);
    console.log("subject", this.marks.biology);
    // console.log("strudent is working",student1.subject);
  },
  marks: {
    math: 19,
    english: 14,
    biology: 234,
  },
};
var student2 = {
  rollNo: 24,
  name: "Ahmad",
  age: 16,
  height: 6.4,
  subject: ["math", "english", "biology"],
  isPresent: true,
  working: function () {
    console.log("subject", this.subject);
    console.log("subject", this.marks.biology);
    // console.log("strudent is working",student1.subject);
  },
  marks: {
    math: 29,
    english: 24,
    biology: 234,
  },
};

// student1.working();
// console.log("student function",student1.working())
// var sayHello=function(){
//   console.log("say hello")
// }
// sayHello()

var studentsArray = [student1, student2];
console.log("🚀 ~ studentsArray:", studentsArray)
console.log("🚀 ~ studentsArray:", studentsArray[1].marks.biology)

