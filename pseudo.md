initially have user choose if they would like to input a word for the array or play the game
    -if they choose to make a word thank them then return to main message

create.js is where we house the function to store the new word to words.txt

play.js will be the main page of this append
    -play.js will have logic for playing hangman

letters.js will convert the letters in the currentWord to " _ "
    -it will be a constructor that has 2 functions
        -one to convert all the letters over to _
        -one to change the letter back

getWord.js will get a new word from words.txt
    - require fs in here to read the words.txt file
    - randomize and get random word from the array

word.js will be constructor function that takes parameter "word"
    - it will take that word and assign it 2 functions
        -one to check and see if the letter guessed by user matches
            -it will also save that letter in lettersGuessed
        -the other will check to see if we won the round of not
            -are there any _ remaining or not



