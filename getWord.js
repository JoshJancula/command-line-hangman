


  //selects a random word from words.txt
  var RandomWord = function() {

    console.log("at the begining");
    var Word = require("./word.js");
    console.log("in getWord.js 9: "+Word);
    var fs = require("fs");
    var contentsArr = [];
    fs.readFile("words.txt", "utf8", function(error, contents) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  // Then split it by commas (to make it more readable)
   contentsArr = contents.split(",");
   console.log("in getWord");
   console.log(contentsArr);
   // the new word we randomly pick out of the .txt file
    var newWord = new Word(contentsArr[Math.floor(Math.random() * contentsArr.length)]);
    console.log(newWord);
    this.RandomWord = newWord.word;

});

  }

 module.exports = RandomWord