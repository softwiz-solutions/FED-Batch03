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

function DOM() {
  // const parentNode=document.getElementById("para-div")
  // console.log("🚀 ~ DOM ~ parentNode:", parentNode.lastChild)
  console.log("parent node", document.getElementById("2nd-child").nextSibling);
}
// DOM()
// console.log("3rd para",document.childNodes[1].childNodes[1].childNodes[0].childNodes[2])
function createCustomeAttribute() {
  var para = document.getElementById("without-class");
  // var img = document.getElementById("demo-image");
  // console.log("id in para", para.hasAttribute("class"));
  // console.log("id in para", img.getAttribute("src"));
  // console.log("id in para", img.getAttribute("alt"));
  // console.log("id in para", img.getAttribute("class"));
  // para.setAttribute("style", "background-color:orange;color:white");
}

function createElemnent() {
  // var div = document.getElementById("test"); // <div id="text"></div>
  // var nodeToAdd = document.createElement("p"); //<p></p>
  // nodeToAdd.setAttribute("class", "js-para"); //<p class="js-para"></p>
  // var textNode = document.createTextNode("Hello this is js para"); // hello this is para
  // nodeToAdd.appendChild(textNode); // <p class="js-para">hello this is para</p>;
  // // nodeToAdd.innerHTML = "This i spara";
  // div.appendChild(nodeToAdd); // <div id="test"> <p class="js-para">hello is is para</p></div>
  var parentNode = document.getElementById("chat");
  var headingNode = document.createElement("h1"); //<h1></h1>
  headingNode.setAttribute("class", "demo-para"); // <h1 class="demo-para"></h1>
  var textNode = document.createTextNode(
    "Hello this heading is genereated by JS"
  ); // "Hello this heading is genereated by JS"
  // parentNode.appendChild(childNode)
  headingNode.appendChild(textNode); // <h1 class="demo-para">Hello this heading is genereated by JS</h1>
  parentNode.appendChild(headingNode);
}

createElemnent();
