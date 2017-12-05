// npm for inquirer
var inquirer = require("inquirer");
// import from Word.js
var Word = require("./Word.js");
// gets our randomWord from getWord
var RandomWord = require("./RandomWord.js");
//// link to the create file
var CreateWord = require("./create.js");
// gets the letters input into the letter.js file
var Letter = require("./letters.js");
// the words getting pulled from getWord
var word = new RandomWord();
// the currentWord for this round
var currentWord = word.word;
// guesses user gets
var guessesLeft = 5;
// the letters we've guessed
var lettersGuessed = [];
// letters in the currentWord
var lettersFromWord = [];

// function to reset lettersFromWord
function resetLetters(currentWord) {
  lettersFromWord = [];
  // the lettersFromLoop array is populated by ...
  for (var i = 0; i < currentWord.length; i++) { // .. this lovely loop
    // which pushes each letter to letters
    lettersFromWord.push(new Letter(currentWord.charAt(i)));
  }
}


resetLetters(currentWord);

// prompt user if they would like to play the game or create a word
inquirer.prompt([{ // create a username

      // ask which they would like to do
      type: "list",
      message: "Single or MultiPlayer?",
      choices: ["Single", "MultiPlayer"],
      name: "decision"
    },

  ])
  .then(function(inquirerResponse) {
    // If its just one player ...
    if (inquirerResponse.decision === "Single") {
      inquirer.prompt([{
          // get username
          type: "input",
          message: "What is your name?",
          name: "username"

        }])
        .then(function(inquirerResponse) {
          // welcome them to the game
          console.log("\nWelcome " + inquirerResponse.username);
          // play the game
          playGame();
        });
    }

    else { // create a word to be added to the words.txt file
      inquirer.prompt([
          // ask player 1 to input their word
          {
            type: "password",
            message: "Player One Input a Word",
            name: "newWord"
          },
        ])
        .then(function(user) {
          // If the inquirerResponse confirms, we displays the inquirerResponse's username and creates a new word
          console.log("\nThanks, Player 2 Get Ready");
          // player 1 creates a word
          CreateWord(user.newWord);
          // this word gets word characteristics
          word.word = user.newWord;
          // this word is now currentWord
          currentWord = word.word;
          // reset the letters in lettersFromWord
          resetLetters(currentWord);
          // reset lettersGuessed
          lettersGuessed = [];
          // start game
          playGame();
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
    console.log(guess.letter);
    // compare the letter to the lettersFromWord arr to see if it matches any
    if (word.newWord.compareLetter(guess.letter, lettersFromWord, lettersGuessed) == true) {
      // if it does tell them it does
      console.log("Correct!" + "\n" + "So Far You've Guessed: " +
        lettersGuessed + "\n" + "Guesses Remaining: " + guessesLeft);

    }
    else { // subtract one from guessesLeft
      guessesLeft--;
      if (guessesLeft > 0) { // if you have any guesses left ...
        console.log("Incorrect, You now have " + guessesLeft + " guesses remaining." + "\n" +
          "So Far You've Guessed: " + lettersGuessed);
      }
      else { // otherwise the game is over
        console.log("Game over!" + "\n" + "The correct word was " + currentWord);
        displayWord(); // show the word
        console.log("You Lost!"); // tell them they lost
        inquirer.prompt([{ // ask them if they'd like to play again
            type: "confirm",
            message: "Would you like to play again?",
            name: "confirm",
            default: true
          }])
          .then(function(inquirerResponse) {
            // If they want to play again ...
            if (inquirerResponse.confirm) {
              // reset guessesLeft
              guessesLeft = 5;
              // need a new word
              word = new RandomWord();
              // reset the currentWord
              currentWord = word.word;
              // reset the letters in lettersFromWord
              resetLetters(currentWord);
              // reset lettersGuessed
              lettersGuessed = [];
              // start new game
              playGame();
            }
          });
      }
    } // check if we won the game or not
    if (word.newWord.checkIfWeWon(lettersFromWord) == false) { // if its not
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
            // reset guessesLeft
            guessesLeft = 5;
            // need a new word
            word = new RandomWord();
            // reset the currentWord
            currentWord = word.word;
            // reset the letters in lettersFromWord
            resetLetters(currentWord);
            // reset lettersGuessed
            lettersGuessed = [];
            // start new game
            playGame();
          }
        });
    }
  });
}
