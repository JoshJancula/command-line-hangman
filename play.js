// npm for inquirer
var inquirer = require("inquirer");
// gets our randomWord from getWord
var getWord = require("./getWord.js");
//// link to the create file
var CreateWord = require("./create.js");
// gets the letters input into the letter.js file
var Letter = require("./letter.js");
// the word getting pulled from getWord
var word = getWord.RandomWord();
// the currentWord for this round
var currentWord = word.newWord;
// guesses user gets
var guessesLeft = 5;
// the letters we've guessed
var lettersGuessed = [];
// letters in the currentWord
var lettersFromWord;
// the letters array is populated by ...
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
            // need to show the word and update the _ when we get the letter right
            // need to have logic if we got it right or wrong
            // right will show you the new version of the hidden letters/word and tell you good job
            // wrong wlll subtract one from guesses and re-display the word
            // if you win or lose the game inquirer will ask the user if they want to play again
            // if they do it will get a new word and play again
            // not sure how to do this, maybe with a while loop or a function that doesn't finish until guessesLeft = 0 or we win
            // look into if you can get a function to do that

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
