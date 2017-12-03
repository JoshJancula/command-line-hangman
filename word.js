var Word = function(word) {
    this.word = word;
    // for each guessed character, step through the computer's word to see if it matches
    this.compareLetter = function(letter, lettersFromWord) {
        // set letterFound to false
        var letterFound = false;
        // go thru and check each letter
        for (var i = 0; i < word.length; i++) {
            var oneCharFromWord = word.slice(i, 1);
            // if it matches
            if (letter === oneCharFromWord) {
                // change the output of the letter
                lettersFromWord[i].changeOutput();
                // store the letter in the lettersGuessed
                lettersGuessed.push(letter)
                // letterFound is now true
                letterFound = true;
                // display results
                console.log(word + "\n" + "So Far You've Guessed: " +
                    lettersGuessed + "\n" + "Guesses Remaining: " + guessesLeft)
            }
        }
    }

    //checks to see if the word has been solved by checking to see if all the shown characters are letters
    this.checkIfWeWon = function(lettersFromfWord) {
        var weWon = true;
        for (var i = 0; i < this.word.length; i++) {
            // if there are any " _ " left you haven't won
            if (letters[i].output == "_") {
                weWon = false;
            }
        }
    }
}

// export it
module.exports = Word;
