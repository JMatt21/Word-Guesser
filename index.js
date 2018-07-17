// File Requirements
const Word = require('./word');
const inquirer = require('inquirer');

// Constants
const listOfWords = ['test word', 'word test'];
const MAX_NUMBER_OF_GUESSES = 5;
// Variables
let answer;
let numOfGuesses;
let lettersGuessed = [];

// Functions
function newGuess() {
    if (numOfGuesses !== 0) {
        inquirer.prompt({
            type: 'text',
            message: 'Guess This Word: ' + answer.toString(),
            name: 'guess'
        }).then((user) => {
            if (!answer.guess(user.guess)) {
                console.log('\nINCORRECT!!!\n' + --numOfGuesses + ' guesses left!\n');
            } else {
                console.log('\nCORRECT!!!\n');
            }

            if (answer.toString().indexOf('_') === -1) {
                console.log('You did it!');
                newGame();
            } else {
                newGuess();
            }
        });
    } else {
        console.log('OOOH YOU MISSED THAT ONE TRY ANOTHER!');
        newGame();
    }
}

function newGame() {
    answer = new Word(listOfWords[Math.floor(Math.random() * listOfWords.length)]);
    numOfGuesses = MAX_NUMBER_OF_GUESSES;
    newGuess();
}

//On Startup
newGame();

