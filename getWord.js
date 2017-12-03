
var Word = require("./words.txt");
var fs = require("fs");

  //selects a random word from words.txt
  var RandomWord = function() {
    var contentsArr;
    fs.readFile("words.txt", "utf8", function(error, contents) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  // Then split it by commas (to make it more readable)
   contentsArr = contents.split(",");
});
    // the new word we randomly pick out of the .txt file
    var newWord = new Word(contentsArr[Math.floor(Math.random() * contentsArr.length)]);
  }

 module.exports = RandomWord