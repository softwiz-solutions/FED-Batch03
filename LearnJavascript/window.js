function getWindowLocation() {
  // var myLocation=window.location
  // console.log("🚀 ~ getWindowLocation ~ myLocation:", myLocation)
  // var href=myLocation.href
  // console.log("🚀 ~ getWindowLocation ~ href:", href)
  // var pathName=myLocation.pathname
  // console.log("🚀 ~ getWindowLocation ~ pathName:", pathName)
  // var hash=myLocation.hash
  // console.log("🚀 ~ getWindowLocation ~ hash:", hash)
  // window.location.href="https://m.youtube.com/watch?v=ftCbgJQntjg"
  var hostName = window.location.origin;
  var destination = hostName + "/object.html"; // http://127.0.0.1:5500/object.html
  //   window.location.href = destination;
  window.location.assign(destination);
}
// getWindowLocation();

function windowReload() {
  window.location.reload();
}

function move(type) {
  if (type == "forward") {
    history.forward();
  } else if (type == "backward") {
    history.back();
  } else {
    history.go(parseInt(type));
  }
}

function createNewWindow() {
  var monkeyWindow = window.open("width=420,height=380");
  var windowContent =
    "<h1>Capuchin monkey</h1><img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNib711YOVJ3ZBv7bC1mx4EbK609f4yMHDjQ&s'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
  monkeyWindow.document.write(windowContent);
}
 createNewWindow()

