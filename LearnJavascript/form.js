var handleSubmit = function () {
  var email = document.getElementById("email");
  var name = document.getElementById("name");
  var states = document.getElementById("states");
  var phoneNumber = document.getElementById("phoneNumber");
  console.log("🚀 ~ handleSubmit ~ phoneNumber:", phoneNumber.value)
  
  console.log("🚀 ~ handleSubmit ~ states:", states.value);

  if (email.value == "" || name.value == "" || states.selectedIndex == 0) {
    alert("Please fill all the fields");
    return;
  }
  if (!email.value.includes("@")) {
    alert("Invalid email format");
    email.focus();
    email.style.backgroundColor = "red";
    return;
  }

  document.getElementById("emailResult").innerHTML += email.value;
  document.getElementById("nameResult").innerHTML += name.value;
  document.getElementById("stateResult").innerHTML += states.value;

  email.value = "";
  name.value = "";
  states.value = "";
};
