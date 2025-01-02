// function changeEmailLabelStyle() {
//   //   var email = document.getElementById("email");
//   //   email.className = "modern-label";

//   //   document.getElementById("emailLabel").className += " modern-label";
//   document.getElementById("emailLabel").style.backgroundColor = "orange";
//   document.getElementById("emailLabel").style.fontSize = "3rem";
// }

// function findMaxBetweenTwoNumbers() {
//   var num1 = document.getElementById("num1").value;
//   var num2 = document.getElementById("num2").value;
//   var result = "";
//   if (num1 > num2) {
//     result = "Number 1 is greater " + num1;
//   } else {
//     result = "Number 2 is greater " + num2;
//   }
//   document.getElementById("result1").innerHTML = result;
// }

// function targetElementByTagName() {
//   // var headings = document.getElementsByTagName("h1");
//   // console.log("🚀 ~ targetElementByTagName ~ headings:", headings);

//   // // headings[1].style.fontSize = "23px";

//   // for (var i = 0; i < headings.length; i++) {
//   //   headings[i].style.fontSize = "90px";
//   //   var number=i+1
//   //   headings[i].innerHTML = "Heading " + number;
//   // }
//   var container = document.getElementById("heading-div");
//   var headings = container.getElementsByTagName("h1");
//   for (var i = 0; i < headings.length; i++) {
//     headings[i].style.fontSize = "90px";
//     var number = i + 1;
//     headings[i].innerHTML = "Heading " + number;
//   }
// }


// console.log("3rd para",document.childNodes[1].childNodes[1].childNodes[0].childNodes[2])

function DOM(){
  // const parentNode=document.getElementById("para-div")
  // console.log("🚀 ~ DOM ~ parentNode:", parentNode.lastChild)
  console.log("parent node",document.getElementById("2nd-child").nextSibling)

}
DOM()
// console.log("3rd para",document.childNodes[1].childNodes[1].childNodes[0].childNodes[2])