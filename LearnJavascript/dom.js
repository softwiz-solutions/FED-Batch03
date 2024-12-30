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



