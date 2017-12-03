//constructor function for the Letter object
var Letter = function(letter) {
  this.letter = letter;
  // show letter initially as " _ "
  this.output = "_";
  //return character to console
  this.showOutput = function() {
    return this.output;
  }
   //changes the temporary character being shown to the actual letter
  this.changeOutput = function() {
    this.output = letter;
  }
}

module.exports = Letter