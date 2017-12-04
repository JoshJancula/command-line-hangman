// npm for inquirer
var inquirer = require("inquirer");
// gets our randomWord from getWord
var RandomWord = require("./RandomWord.js");
//// link to the create file
var CreateWord = require("./create.js");
// gets the letters input into the letter.js file
var Letter = require("./letters.js");
// the words getting pulled from getWord
var word = new RandomWord();
console.log(word.word);
// the currentWord for this round
var currentWord = word.word;
// guesses user gets
var guessesLeft = 5;
// the letters we've guessed
var lettersGuessed = [];
// letters in the currentWord
var lettersFromWord = [];
// the lettersFromLoop array is populated by ...
for (var i = 0; i < currentWord.length; i++) { // .. this lovely loop
  // which pushes each letter to letters
  lettersFromWord.push(new Letter(currentWord.slice(i, 1)));
}





// prompt user if they would like to play the game or create a word
inquirer.prompt([{ // create a username
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    { // ask which they would like to do
      type: "list",
      message: "Would you like to create a word or play the game?",
      choices: ["Create Word", "Play Game"],
      name: "decision"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse is to play the game ...
    if (inquirerResponse.decision === "Play Game") {
      console.log("\nWelcome " + inquirerResponse.username);
      // play the game
      playGame();
    }

    else { // create a word to be added to the words.txt file
      inquirer.prompt([
          // ask the user to input their word
          {
            type: "input",
            message: "Input a Word",
            name: "newWord"
          },
        ])
        .then(function(user) {
          // If the inquirerResponse confirms, we displays the inquirerResponse's username and creates a new word
          console.log("\nThanks for your input " + inquirerResponse.username);
          CreateWord(user.newWord);
        });

    }
  });



// function to display the currentWord with _ and letters you've gotten correct
function displayWord() {
  var currentDisplay = "";
  // go thru and change each letter and replace it with _
  for (var i = 0; i < lettersFromWord.length; i++) {
    currentDisplay += lettersFromWord[i].showOutput(); // replaces letter to _
    currentDisplay += " "; // adds to display
  } // show the display
  console.log(currentDisplay);
}


// function to play the game
function playGame() {
  // first load the display
  displayWord();
  // ask the user to input a letter
  inquirer.prompt({ name: "letter", message: "Guess a letter:" }).then(function(guess) {
    // compare the letter to the lettersFromWord arr to see if it matches any
    if (word.compareLetter(guess.letter, lettersFromWord, lettersGuessed) == true) {
      console.log("Correct!"); // if it does tell them it does
      console.log("Correct!" + "\n" + word + "\n" + "So Far You've Guessed: " +
        lettersGuessed + "\n" + "Guesses Remaining: " + guessesLeft)

    }
    else { // subtract one from guessesLeft
      guessesLeft--;
      if (guessesLeft > 0) { // if you have any guesses left ...
        console.log("Incorrect, You now have " + guessesLeft + " guesses remaining.");
      }
      else { // otherwise the game is over
        console.log("Game over!");
      }
    } // check if we won the game or not
    if (word.checkIfWeWon(lettersFromWord) == false) { // if its not
      if (guessesLeft > 0) { // and you still have some guesses remaining
        playGame(); // guess again
      }
    }
    else { // otherwise you won so congrats
      displayWord(); // show the word
      console.log("You Win!"); // tell them they won
      inquirer.prompt([{ // ask them if they'd like to play again
          type: "confirm",
          message: "Would you like to play again?",
          name: "confirm",
          default: true
        }])
        .then(function(inquirerResponse) {
          // If they want to play again ...
          if (inquirerResponse.confirm) {
            // reset the currentWord
            currentWord = word.word;
            // start new game
            playGame();
          }
        });
    }
  });
}


