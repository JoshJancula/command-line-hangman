var Word = function(word) {
    this.word = word;
    // for each guessed character, step through the computer's word to see if it matches
    this.compareLetter = function(letter, lettersFromWord, lettersGuessed) {
        // set letterFound to false
        var letterFound = false;
        // go thru and check each letter
        for (var i = 0; i < word.length; i++) {
            var oneCharFromWord = word.charAt(i);
            // if it matches

            if (letter == oneCharFromWord) {
                // change the output of the letter
                lettersFromWord[i].changeOutput();
                // letterFound is now true
                letterFound = true;
            }

        }
        // store the letter in the lettersGuessed
        lettersGuessed.push(letter);
        return letterFound;
    };

    //checks to see if the word has been solved by checking to see if all the shown characters are letters
    this.checkIfWeWon = function(lettersFromWord) {
        var weWon = true;
        for (var i = 0; i < this.word.length; i++) {
            // if there are any " _ " left you haven't won
            if (lettersFromWord[i].output == "_") {
                weWon = false;
            }
        }
        return weWon;
    };
};




// export it
module.exports = Word
