function changeEmailLabelStyle() {
  //   var email = document.getElementById("email");
  //   email.className = "modern-label";

  //   document.getElementById("emailLabel").className += " modern-label";
  document.getElementById("emailLabel").style.backgroundColor = "orange";
  document.getElementById("emailLabel").style.fontSize = "3rem";
}

function findMaxBetweenTwoNumbers() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = "";
  if (num1 > num2) {
    result = "Number 1 is greater " + num1;
  } else {
    result = "Number 2 is greater " + num2;
  }
  document.getElementById("result1").innerHTML = result;
}

function targetElementByTagName() {
  // var headings = document.getElementsByTagName("h1");
  // console.log("🚀 ~ targetElementByTagName ~ headings:", headings);

  // // headings[1].style.fontSize = "23px";

  // for (var i = 0; i < headings.length; i++) {
  //   headings[i].style.fontSize = "90px";
  //   var number=i+1
  //   headings[i].innerHTML = "Heading " + number;
  // }
  var container = document.getElementById("heading-div");
  var headings = container.getElementsByTagName("h1");
  for (var i = 0; i < headings.length; i++) {
    headings[i].style.fontSize = "90px";
    var number = i + 1;
    headings[i].innerHTML = "Heading " + number;
  }
}
