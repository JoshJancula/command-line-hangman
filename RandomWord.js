
//selects a random word from words.txt
var RandomWord = function () {


  var Word = require("./Word.js");
  var fs = require("fs");
  var contentsArr = [];
  var contents = fs.readFileSync("words.txt", "utf8");

    // If the code experiences any errors it will log the error to the console.
    // if (error) {
    //   return console.log(error);
    // }
    // Then split it by commas (to make it more readable)
    contentsArr = contents.split(",");
    // the new word we randomly pick out of the .txt file
    var newWord = new Word(contentsArr[Math.floor(Math.random() * contentsArr.length)]);

    this.word = newWord.word;

  // });

}

module.exports = RandomWord