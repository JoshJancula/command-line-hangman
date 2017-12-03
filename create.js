  // variable to require fs
  var fs = require("fs");
// file we are appending to
var textFile = ("./words.txt")
// function to create the new word
var CreateWord = function (word) {
    this.word = word;
  // append the new word to words.txt
  fs.appendFile(textFile, word + ", ", function(err) {
      if (err) {
      console.log(err);
    }
  });
}
// export it
module.exports = CreateWord

