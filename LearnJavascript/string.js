// var userName = "ali ahmd";
// var replacementValue = "hello";
// console.log("username replace", userName.replace, replacementValue));

// console.log("my name is", userName.charAt(0)); //array[0]
// console.log("my name is", userName.length); //array[0]

// for (var i = 0; i < userName.length; i++) {
//   console.log("user name element", userName.charAt(i));
// }
// console.log("indedx",userName.indexOf("li"))
var statement =
  "The New Yorker magazine doesn't allow the phrase 'World War II.' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

for (var i = 0; i < statement.length; i++) {
  if (statement.slice(i, i + 12) == "World War II") {
    statement =
      statement.slice(0, i) + "the Second World War" + statement.slice(i + 12);
  }
}
console.log("statement", statement);

// write a js program, get the statement from the user, and get the word that user want to replace and also get new word, if it exists , then replace it otherwise show replacing word
