
//selects a random word from words.txt
var RandomWord = function () {


  var Word = require("./Word.js");
  var fs = require("fs");
  var contentsArr = [];
  var contents = fs.readFileSync("words.txt", "utf8");
    // Then split it by commas (to make it more readable)
    contentsArr = contents.split(", ");
    // the new word we randomly pick out of the .txt file
    this.newWord = new Word(contentsArr[Math.floor(Math.random() * contentsArr.length)]);
    // this now has the characteristics of Word
    this.word = this.newWord.word;



}
// ship it out
module.exports = RandomWord